import { DataSource } from "typeorm";
import { CovidCase } from "./entity/CovidCase";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: process.env.NODE_ENV === "test" ? "test-database.sqlite" : "database.sqlite",
  entities: [CovidCase],
});

// export const initializeDataSource = async () => {
//   await AppDataSource.initialize()
//     .then(async () => {
//       await AppDataSource.synchronize()
//     })
//     .catch((err) => {
//       console.error("Error during Data Source initialization", err)
//     })
// }
