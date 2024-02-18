// import { PrismaClient } from "@prisma/client";
// const Prisma = new PrismaClient();

const { PrismaClient } = require("@prisma/client");

const Prisma = new PrismaClient();

async function main(){
 try {    
 const student = await Prisma.students.create({
        data:{
            email:"bilza2023@gmail.com",
            password: "123456"
        }
    });
console.log("student",student);
//   const all_students = await Prisma.students.findMany();
//  console.log("all_students",all_students);

// const studentByEmail = await Prisma.students.findUnique({
//     where: {
//         email: "bilza2023@msn.com"
//     }
// });
// console.log("studentByEmail" , studentByEmail);

 } catch (error) {
    console.error('Error creating student:', error); // Log any errors
 } finally {
    await Prisma.$disconnect(); // Close Prisma connection
 }
}

main().catch(error => {
    console.error('Error in main function:', error);
    process.exit(1); // Exit with non-zero code to indicate failure
});