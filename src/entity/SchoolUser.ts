import {
  ChildEntity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import {User} from "./User";
import {School} from "./School";

@ChildEntity('school')
export class SchoolUser extends User {
  @ManyToOne(
    () => School,
    { nullable: true, createForeignKeyConstraints: false },
  )
  @JoinColumn({ name: 'entityId', referencedColumnName: 'schoolId' })
  school?: School | null;

  public getOrgName(): string {
    return this.school.name;
  }
}
