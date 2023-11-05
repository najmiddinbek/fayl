import { connectMongoDB } from "../../../lib/mongodb";
import Aydilar from '../../../models/delete-ids';
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    try {
        const { deletedIds } = req.body;

        await Aydilar.saveDeletedIds(deletedIds); // delete-ids modelidagi saveDeletedIds funksiyasini chaqirish

        res.status(200).json({ message: 'Deleted ids saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while saving deleted ids' });
    }
}