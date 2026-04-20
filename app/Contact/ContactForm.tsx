"use client";

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { saveMessage } from '../../backend/actions';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; text: string }>({ type: '', text: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', text: 'Odesílám data do systému...' });

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        const result = await saveMessage(data);

        if (result.success) {
            form.reset();
            setStatus({ type: 'success', text: 'Zpráva úspěšně zašifrována a uložena.' });

            setTimeout(() => {
                setStatus({ type: '', text: '' });
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }, 1500);
        } else {
            setStatus({ type: 'error', text: 'Kritická chyba: Nepodařilo se připojit k databázi.' });
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
                {isSubmitting ? 'Odesílám...' : 'Send Message'}
            </button>

            {status.text && (
                <p className={status.type === 'success' ? styles.successText : styles.errorText}>
                    {status.text}
                </p>
            )}
        </form>
    );
}