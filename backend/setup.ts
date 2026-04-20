import { sql } from '@vercel/postgres';

export async function createMessagesTable() {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
        console.log('Tabulka messages byla úspěšně vytvořena/zkontrolována.');
    } catch (error) {
        console.error('Chyba při vytváření tabulky:', error);
        throw error;
    }
}