import React from 'react'
import styles from './Input.module.scss'

export const TextInput = ({ type, label, helperText, register, name, error, errorMessage,}) => {
    return (
        <div className={styles.text_input}>
            <input
                type={type}
                id={name}
                placeholder={label}
                className={`${styles.input} ${error && styles.input_error}`}
                {...register(name)}
            />
            <label htmlFor={name} className={`${styles.label} ${error && styles.label_error}`}>
                {label}
            </label>
            {helperText && !error && <span className={styles.helper_text}>{helperText}</span>}
            {error && <span className={`${styles.helper_text} ${styles.helper_text_error}`}>{errorMessage}</span>}
        </div>
    );
};

export const RadioButton = ({ register, name, value, isChecked }) => {
    return (
        <div className={styles.radio_button}>
            <input
                className={styles.radio_button_input}
                type="radio"
                id={name}
                {...register('position_id')}
                value={value}
                defaultChecked={isChecked}
            />
            <label className={styles.radio_button_label} htmlFor={name}>
                {name}
            </label>
        </div>
    );
};
  
export const FileInput = ({ register, watch, error, errorMessage }) => {
    return (
        <div className={styles.file_upload}>
            <input 
                type="file" 
                className={styles.file_upload_input} 
                id="photo" {...register('photo')} 
            />
            <label htmlFor="photo" className={`${error && styles.error_label} ${styles.fileUploadLabel}`}>
                Upload
            </label>
            <div className={`${error && styles.error_description} ${styles.file_upload_description}`}>
                {!watch('photo') || watch('photo').length === 0 ? (
                    <span>Upload your photo</span>
                ) : (
                    <span className={styles.file}>{watch('photo')[0].name}</span>
                )}
            </div>
            {error && <span className={styles.helper_text_error}>{errorMessage}</span>}
        </div>
    );
};
