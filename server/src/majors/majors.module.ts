// server/src/majors/majors.module.ts
import { Module } from '@nestjs/common';
import { MajorsController } from './majors.controller'; // Updated
import { MajorsService } from './majors.service';       // Updated
import { TypeOrmModule} from '@nestjs/typeorm';
import { Major } from './major.entity';                 // Updated

@Module({
  imports:[TypeOrmModule.forFeature([Major])],         // Updated
  controllers: [MajorsController],                     // Updated
  providers: [MajorsService]                           // Updated
})
export class MajorsModule {}                           // Updated
