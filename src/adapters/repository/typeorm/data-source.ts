import { DataSource } from "typeorm";
import { CreateClinic1660229536172 } from "./migrations/clinic/1660229536172-CreateClinic";
import { CreateClinicType1660229531974 } from "./migrations/clinic_type/1660229531974--CreateClinicType";
import { CreateProfile1660229516240 } from "./migrations/profile/1660229516240-CreateProfile";
import { V1Release1660256966234 } from "./migrations/releases/1660256966234-V1Release";
import { V2Release1660256966235 } from "./migrations/releases/1660256966235-V2Release";
import { CreateUser1659896492936 } from "./migrations/users/1659896492936-CreateUser";
import { CreateUserType1660229382984 } from "./migrations/user_type/1660229382984-CreateUserType";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "ec2-44-205-63-142.compute-1.amazonaws.com",
  port: 5432,
  username: "drrbrkxgybpncw",
  password: "f03500e1a45eaa0346040f0e718e65ef62611734af2f41fd66c58789740d4c45",
  database: "d6rltr94i69giv",
  synchronize: true,
  logging: true,
  entities: ["./src/entities/**/*.ts"],
  subscribers: [],
  migrations: [
    CreateUser1659896492936,
    CreateProfile1660229516240,
    CreateUserType1660229382984,
    CreateClinic1660229536172,
    V1Release1660256966234,
    V2Release1660256966235,
  ],
  ssl: true,
  migrationsTransactionMode: "all",
});

const AppDataSourceDocker = new DataSource({
  type: "postgres",
  host: "172.21.0.3",
  port: 5432,
  username: "ids_user",
  password: "pwdids",
  database: "IDS_DB",
  synchronize: true,
  logging: true,
  entities: ["./src/entities/**/*.ts"],
  subscribers: [],
  migrations: [
    CreateUser1659896492936,
    CreateProfile1660229516240,
    CreateUserType1660229382984,
    CreateClinic1660229536172,
    V1Release1660256966234,
    V2Release1660256966235,
  ],
  migrationsTransactionMode: "all",
});

export default AppDataSource;
