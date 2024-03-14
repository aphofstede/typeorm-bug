import {Entity, PrimaryGeneratedColumn, Column, TableInheritance} from "typeorm"

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  companyId: number

  @Column()
  name: string

  constructor(company?: Partial<Company>) {
    if (company) {
      Object.assign(this, company);
    }
  }
}
