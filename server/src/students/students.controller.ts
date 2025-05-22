// server/src/students/students.controller.ts
import {
  Controller,
  Body,
  Get,
  Post,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto'; // New DTO
import { StudentsService } from './students.service'; // Will be created
import { Student } from './student.entity'; // Already created

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  GetAllStudents(): Promise<Student[]> { // Updated method name and return type
    return this.studentsService.getAllStudents();
  }

  @Get(':id/get')
  GetStudent(@Param('id') id: number): Promise<Student> { // Updated method name and return type
    return this.studentsService.getOneStudent(id);
  }

  @Post('add')
  CreateStudent(@Body() newStudent: CreateStudentDto): Promise<Student> { // Updated method and DTO
    return this.studentsService.createStudent(newStudent);
  }

  @Delete(':id/delete')
  DeleteStudent(@Param('id') id: number): Promise<void> { // Updated method name
    return this.studentsService.deleteStudent(id);
  }

  @Put(':id/edit')
  UpdateStudent(@Param('id') id: number, @Body() studentData: UpdateStudentDto): Promise<Student> { // Updated method and DTO
    return this.studentsService.updateStudent(id, studentData);
  }
}
