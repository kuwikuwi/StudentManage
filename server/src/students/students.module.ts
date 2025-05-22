// server/src/students/students.module.ts
import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller'; // Updated
import { StudentsService } from './students.service';       // Updated
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';                 // Updated
// import { MajorsModule } from '../majors/majors.module'; // Optional: if direct service injection is needed

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    // MajorsModule, // Optional: if MajorsService needs to be injectable here
  ],
  controllers: [StudentsController], // Updated
  providers: [StudentsService],      // Updated
})
export class StudentsModule {}       // Updated
