import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
const prisma = new PrismaClient();
dotenv.config();
const app = express();
const {PORT} = process.env || 3000;

app.use(cors())
app.use(express.json());
app.post('/apprenant',async (req,res)=>{
    const apprenant = await prisma.apprenant.create({
        data:
            req.body
    })
    res.json(apprenant);
})
app.get('/apprenant',async (req,res)=>{
   const apprenant = await prisma.apprenant.findMany();
   res.json(apprenant);
})
app.listen(PORT, (req,res) => {
    console.log(`Server running on port http://localhost:${PORT}`);
})