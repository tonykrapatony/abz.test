import React, { useEffect, useState } from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FileInput, RadioButton, TextInput } from '../../Input/Input';
import schema from './schema';
import { getPosition, getToken, getUsers, registerUser } from '../../../api/fetch';
import Preloader from '../../Preloader/Preloader';
import Button from '../../Button/Button';

export default function Form({ setData, setSuccessRegistration }) {
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState([]);
    const [registerErrors, setRegisterErrors] = useState('');
    const [fails, setFails] = useState(null);
  
    const {
        handleSubmit,
        register,
        watch,
        reset,
        formState: { errors, isDirty },
    } = useForm({
        resolver: yupResolver(schema),
    });

    let formEmpty = !isDirty;

    const onSubmit = async (user) => {
        try {
            setLoading(true);
            const { token, success: successToken } = await getToken();
      
            if (successToken) {
                const formData = new FormData();
                formData.append('name', user.name);
                formData.append('email', user.email);
                formData.append('phone', user.phone);
                formData.append('photo', user.photo[0]);
                user.position_id && formData.append('position_id', user.position_id);

                const response = await registerUser(token, formData);
        
                if (response.success) {
                    setSuccessRegistration(true);
                    reset();
                    try {
                        const { users } = await getUsers(1);
                        setData(users);
                    } catch (error) {
                        console.error(error);
                    }
        
                    setTimeout(() => {
                        setSuccessRegistration(false);
                    }, 3000);
                } else {
                    if (response.fails) {
                        setFails(response.fails);
                        setRegisterErrors('')
                    } else {
                        setFails(null);
                        setRegisterErrors(response.message)
                    }
                }
            }
        } catch (error) {
            setRegisterErrors('Error, look to the browser console')
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const fetchData = async () => {
        try {
            let { positions } = await getPosition();
            setPosition(positions);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <form className={styles.registration_form} onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                type="text"
                label="Your name"
                register={register}
                name="name"
                error={errors.name || fails?.name?.[0]}
                errorMessage={errors.name?.message || fails?.name?.[0]}
            />
            <TextInput
                type="email"
                label="Email"
                register={register}
                name="email"
                error={errors.email || fails?.email?.[0]}
                errorMessage={errors.email?.message || fails?.email?.[0]}
            />
            <TextInput
                type="tel"
                label="Phone"
                helperText="+38 (XXX) XXX - XX - XX"
                register={register}
                error={errors.phone || fails?.phone?.[0]}
                errorMessage={errors.phone?.message || fails?.phone?.[0]}
                name="phone"
            />
            <div className={styles.radio_button_block}>
                <p>Select your position</p>
                {position &&
                    position.map(({ name, id }, index) => {
                        return (
                            <RadioButton key={id} name={name} value={id} register={register} isChecked={index === 0} />
                        );
                    })
                }
            </div>
            <FileInput 
                register={register} 
                watch={watch} 
                error={errors.photo || fails?.photo?.[0]} 
                errorMessage={errors.photo?.message || fails?.photo?.[0]} 
            />
            {registerErrors && 
                <p className='text-error'>{registerErrors}</p>
            }
            {loading ? <Preloader /> : <Button type="submit" disabled={formEmpty}>Sign up</Button>}
        </form>
    )
}
