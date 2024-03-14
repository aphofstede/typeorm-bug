import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {School} from "./entity/School";
import {SchoolUser} from "./entity/SchoolUser";
import {Company} from "./entity/Company";
import {CompanyUser} from "./entity/CompanyUser";

export const AppDataSource = new DataSource({
    type: 'postgres',
    port: 5433, // docker-compose.yml
    username: 'test',
    password: 'admin',
    database: 'test',
    synchronize: true,
    logging: true,
    entities: [User, School, Company, SchoolUser, CompanyUser],
    migrations: [],
    subscribers: [],
})
