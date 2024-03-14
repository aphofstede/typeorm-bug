import {Entity, PrimaryGeneratedColumn, Column, TableInheritance} from "typeorm"

@Entity('schools')
export class School {
  @PrimaryGeneratedColumn()
  schoolId: number

  @Column()
  name: string

  constructor(school?: Partial<School>) {
    if (school) {
      Object.assign(this, school);
    }
  }
}
