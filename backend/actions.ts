"use server";

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { Message } from './types';

export async function saveMessage(formData: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}) {
    try {
        await sql`
      INSERT INTO messages (first_name, last_name, email, message)
      VALUES (${formData.firstName}, ${formData.lastName}, ${formData.email}, ${formData.message})
    `;

        revalidatePath('/Contact');

        return { success: true };
    } catch (error) {
        console.error('Chyba při ukládání zprávy:', error);
        return { success: false, error: 'Nepodařilo se odeslat zprávu.' };
    }
}

export async function fetchMessages(): Promise<Message[]> {
    try {
        const data = await sql`
      SELECT id, first_name as "firstName", last_name as "lastName", email, message, created_at as "createdAt"
      FROM messages
      ORDER BY created_at DESC
    `;

        return data.rows.map(row => ({
            id: row.id,
            firstName: row.firstName,
            lastName: row.lastName,
            email: row.email,
            message: row.message,
            createdAt: new Date(row.createdAt).toISOString().split('T')[0],
        }));
    } catch (error) {
        console.error('Chyba při načítání zpráv:', error);
        return [];
    }
}