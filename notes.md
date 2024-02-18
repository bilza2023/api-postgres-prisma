sudo docker exec -it postgres-cont bash
psql -U postgres -W
\l //list databases
q // to quit from this screen
\dt //in the database screen see database-table
\c database_name; //to swtich to a db
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
SELECT * FROM students; // after \c taleem_db

//== Prisma

const studentByEmail = await Prisma.students.findUnique({
    where: {
        email: "example@example.com"
    }
});


