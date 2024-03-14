import {Entity, PrimaryGeneratedColumn, Column, TableInheritance} from "typeorm"

@TableInheritance({ column: { type: 'text', name: 'entityType', nullable: true } })
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    userId: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    constructor(user?: Partial<User>) {
        if (user) {
            Object.assign(this, user);
        }
    }
}
