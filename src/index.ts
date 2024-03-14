import { pick } from 'lodash';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import {Company} from "./entity/Company";
import {School} from "./entity/School";
import {SchoolUser} from "./entity/SchoolUser";
import {CompanyUser} from "./entity/CompanyUser";

const debugFields = (column: object) => pick(column,
  [
    'propertyName', 'givenDatabaseName', 'propertyPath', 'propertyAliasName', 'databaseName', 'databasePath', 'databaseNameWithoutPrefixes',
    'referencedColumn.propertyName',
    'relationMetadata.propertyName',
  ]
)

AppDataSource.initialize().then(async () => {
    // Get typeorm metadata for the two user types
    const companyMetadata = AppDataSource.manager.getRepository(CompanyUser).metadata;
    const companyColumn = companyMetadata.columns.find(col => col.referencedColumn?.propertyName === 'companyId');
    const schoolMetadata = AppDataSource.manager.getRepository(SchoolUser).metadata;
    const schoolColumn = schoolMetadata.columns.find(col => col.propertyName === 'school');

    // Print the relevant fields
    console.log({
        companyColumn: debugFields(companyColumn),
        schoolColumn: debugFields(schoolColumn),
    });

    // const company = new Company({ name: 'test co.' });
    // await AppDataSource.manager.save(company)
    // console.log("Saved a new company with id: " + company.companyId)
    //
    // const school = new School({ name: 'U test' });
    // await AppDataSource.manager.save(school)
    // console.log("Saved a new school with id: " + school.schoolId)

    // const schoolUser = new SchoolUser({ firstName: 'Timber', lastName: 'Saw', age: 20 });
    // schoolUser.school = school;
    // await AppDataSource.manager.save(schoolUser)
    // console.log("Saved a new school user with id: " + schoolUser.userId)
    //
    // const companyUser = new CompanyUser({ firstName: 'Forest', lastName: 'Axe', age: 40 });
    // companyUser.company = company;
    // await AppDataSource.manager.save(companyUser)
    // console.log("Saved a new company user with id: " + companyUser.userId)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)
}).catch(error => console.log(error))
