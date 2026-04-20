"use client";

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { saveMessage } from '../../backend/actions';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusText, setStatusText] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusText('Odesílám kód do serveru...');

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        const result = await saveMessage(data);

        if (result.success) {
            (e.target as HTMLFormElement).reset();
            setStatusText('Zpráva uložena do databáze.');

            setTimeout(() => {
                setStatusText('');
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }, 1500);
        } else {
            setStatusText('Chyba spojení s databází.');
        }

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                    <input type="text" id="firstName" name="firstName" required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="lastName" className={styles.label}>Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className={styles.input} />
                </div>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" name="email" required className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message for class</label>
                <textarea id="message" name="message" required rows={5} className={styles.textarea}></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {statusText && <p className={styles.label} style={{ textAlign: 'center', marginTop: '10px', color: '#00f0ff' }}>{statusText}</p>}
        </form>
    );
}