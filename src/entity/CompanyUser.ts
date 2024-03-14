import {
  ChildEntity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import {User} from "./User";
import {Company} from "./Company";

@ChildEntity('company')
export class CompanyUser extends User {
  @ManyToOne(
    () => Company,
    { nullable: true, createForeignKeyConstraints: false },
  )
  @JoinColumn({ name: 'entityId', referencedColumnName: 'companyId' })
  company?: Company | null;

  public getOrgName(): string {
    return this.company.name;
  }
}
