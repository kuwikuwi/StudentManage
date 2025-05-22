// server/src/majors/majors.controller.ts
import { Controller,Get } from '@nestjs/common';
import { MajorsService } from './majors.service'; // Will be created in the next step
import { Major } from './major.entity'; // Already created

@Controller('majors')
export class MajorsController {

    constructor(private majorsService : MajorsService){}

    @Get()
    GetMajors(): Promise<Major[]>{ // Updated method name and return type if service returns Promise
      return this.majorsService.getAllMajors();
    }
}
