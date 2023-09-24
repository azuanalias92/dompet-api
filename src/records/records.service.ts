import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { ModelService } from 'src/model/model.service';

@Injectable()
export class RecordsService {
  constructor(private model: ModelService) {}

  create(createRecordDto: CreateRecordDto) {
    try {
      return this.model.record.create({
        data: createRecordDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    try {
      return this.model.record.findMany({});
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findOne(id: number) {
    try {
      return this.model.record.findFirst({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    try {
      return this.model.record.update({
        where: {
          id: id,
        },
        data: updateRecordDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  remove(id: number) {
    try {
      return this.model.record.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
