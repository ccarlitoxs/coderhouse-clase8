import  dotenv from "dotenv";
dotenv.config();


export const config = {
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DB,
    },
    pool: {min:0, max:10}
}
console.log(config)