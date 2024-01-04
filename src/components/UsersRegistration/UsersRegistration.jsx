import React, { useState } from 'react'
import Form from './Form/Form'
import styles from './UsersRegistration.module.scss'
import success_image from '../../assets/svg/success-image.svg'

export default function UsersRegistration({ setData }) {
    const [successRegistration, setSuccessRegistration] = useState(false);

    return (
        <section className={styles.registration_container}>  
            {!successRegistration && 
                <>
                    <h1>Working with POST request</h1>    
                    <Form 
                        setData={setData}
                        successRegistration={successRegistration} 
                        setSuccessRegistration={setSuccessRegistration}
                    />
                </>
            }
            {!successRegistration && 
                <>
                    <h1>User successfully registered</h1>
                    <img src={success_image} alt="success_image" width='328' height='290'/>
                </>
            }
        </section>
    )
}
