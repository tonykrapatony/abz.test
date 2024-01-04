import React, { useEffect, useState } from 'react';
import styles from './Users.module.scss';
import { getUsers } from '../../api/fetch';
import Preloader from '../Preloader/Preloader';
import User from '../User/User';
import Button from '../Button/Button';

export default function Users({ data, setData, page, setPage }) {

    const [loading, setLoading] = useState(true);
    const [hideButton, setHideButton] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                let users = await getUsers(page);
                setData((prevData) => [...prevData, ...users.users]);
                if (page === users.total_pages) {
                    setHideButton(true);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [page, setData]);

    const handleLoadPage = (e) => {
        e.preventDefault();
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <section className={styles.users_container}>
            <h1>Working with GET request</h1>
            <ul className={styles.users_list}>
                {data && data.map((item, index) => (
                    <User item={item} key={index} />
                ))}
            </ul>
            {loading ? (<Preloader />) : (<Button onClick={handleLoadPage} disabled={false} hidden={hideButton}>Show more</Button>)}
        </section>
    )
}
