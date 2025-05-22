// server/src/students/students.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity'; // Updated import
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto'; // Updated import
import { UpdateStudentDto } from './dto/update-student.dto'; // New import

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>, // Updated
  ) {}

  async createStudent(studentDto: CreateStudentDto): Promise<Student> { // Updated method and DTO
    const newStudent = this.studentRepository.create(studentDto);
    return this.studentRepository.save(newStudent);
  }

  async getAllStudents(): Promise<Student[]> { // Updated method
    return this.studentRepository.find({ relations: ['major_R'] }); // Added relation for major
  }

  async getOneStudent(id: number): Promise<Student> { // Updated method
    const student = await this.studentRepository.findOne({ 
        where: { id: id },
        relations: ['major_R'] // Added relation for major
    });
    if (!student) {
      throw new NotFoundException(`Student with ID #${id} not found`);
    }
    return student;
  }

  async deleteStudent(id: number): Promise<void> { // Updated method
    const result = await this.studentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Student with ID #${id} not found`);
    }
  }

  async updateStudent(id: number, studentData: UpdateStudentDto): Promise<Student> { // Updated method and DTO
    const result = await this.studentRepository.update(id, studentData);
    if (result.affected === 0) {
        throw new NotFoundException(`Student with ID #${id} not found to update`);
    }
    // Fetch and return the updated student with relations
    return this.getOneStudent(id);
  }
}
