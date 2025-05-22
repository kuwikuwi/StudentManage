// server/src/majors/major.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Student } from '../students/student.entity'; // This import will be valid after students module is refactored

@Entity({ name: 'major' })
export class Major {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @Column({ nullable: true }) // Description field can be added later if needed.
  // description: string;

  @OneToMany(() => Student, (student) => student.major_R)
  students_R: Student[];
}
