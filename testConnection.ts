import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345678",
  database: "cba_sucre",
  synchronize: false,
  logging: true,
});

AppDataSource.initialize()
  .then(() => console.log("✅ Conexión exitosa a la base de datos"))
  .catch((err) => console.error("❌ Error en la conexión:", err));
