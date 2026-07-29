import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } = process.env;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PWD,
  database: DB_NAME,
  entities: [__dirname + "/../models/*.{js,ts}"],
  synchronize: false,
  logging: true,
  ssl: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado com sucesso");
  })
  .catch((error) => {
    console.error("Falha ao conectar com o banco de dados");
  });
