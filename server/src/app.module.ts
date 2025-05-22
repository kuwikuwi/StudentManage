import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// News Imports 

import { TypeOrmModule} from '@nestjs/typeorm'
import { MajorsModule } from './majors/majors.module'; // Updated
import { StudentsModule } from './students/students.module'; // Updated

import { ConfigModule} from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'SSAFY',
      database:'crud_mysql_dev',
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:false
    }),
    StudentsModule, // Updated
    MajorsModule],  // Updated
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
