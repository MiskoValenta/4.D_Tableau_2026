"use server";

import { prisma } from './db';
import { revalidatePath } from 'next/cache';

export async function saveMessage(data: { firstName: string; lastName: string; email: string; message: string }) {
    try {
        await prisma.message.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                message: data.message,
            }
        });
        revalidatePath('/Contact');
        return { success: true };
    } catch (error) {
        console.error("Chyba při ukládání zprávy:", error);
        return { success: false, error: "Chyba databáze" };
    }
}

export async function fetchMessages() {
    try {
        const messages = await prisma.message.findMany({
            orderBy: { createdAt: 'desc' }
        });

        return messages.map(msg => ({
            id: msg.id,
            firstName: msg.firstName,
            lastName: msg.lastName,
            email: msg.email,
            message: msg.message,
            createdAt: msg.createdAt.toISOString().split('T')[0]
        }));
    } catch (error) {
        console.error("Chyba při načítání zpráv:", error);
        return [];
    }
}

export async function fetchDonors() {
    return await prisma.donor.findMany({
        orderBy: { amount: 'desc' }
    });
}