require('dotenv').config();
const express=require('express');
const cors = require('cors');


// const mongoose = require('mongoose');
// const db = require("./mongo.js");
// const {DB_URL} = require("./lib/config.js");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

/////////////////////////////////////////////----->>>>
const auth = require('./auth/auth.js');
////////////////////////////////////////////////
const cookieParser = require('cookie-parser');
const PORT = 5000;
////////////////////////////////////////////////////
// debugger;
const app = express()
app.use(cookieParser());
//..
app.use(express.json());
app.use(cors( )); //working
app.use(express.urlencoded({ extended: true }));

//.. Route middlewares--/////////////////////////////////////
app.use("/auth",auth);
///////////////////////////Routes////////////////////////
app.get('/', async (req, res) =>{
    res.status(200).json({success :true ,  message : "Welcome to Taleem Postgres Prisma API"});
});

// app.get('/create_student', async (req, res) =>{
//     try {    
//         const student = await Prisma.students.create({
//                data:{
//                    email:"bilza2024@gmail.com",
//                    password: "123456"
//                }
//            });
//     res.status(200).json({student});
//     } catch (error) {
//         console.error('Error creating student:', error); // Log any errors
//     } 
// });

///////////////////////////////////////////////////////////////////////
app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)});

// Disconnect Prisma client when application shuts down
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit();
});




