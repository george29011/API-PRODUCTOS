import mysql from "mysql2/promise";
export const db = mysql.createPoo1((
host: "localhost", user: "root",
password: process. env. DB_PASSWORD, 
database: "tienda",
)) :
