// server/src/majors/majors.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Major } from './major.entity'; // Updated import

@Injectable()
export class MajorsService {

    constructor(
        @InjectRepository(Major) private majorRepository: Repository<Major>, // Updated
      ) {}
    
    
      async getAllMajors(): Promise<Major[]> { // Updated method name and return type
        return this.majorRepository.find();
      }
}
