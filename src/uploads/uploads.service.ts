import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { ModelService } from 'src/model/model.service';

@Injectable()
export class UploadsService {
  constructor(private model: ModelService) {}

  create(createUploadDto: CreateUploadDto) {
    try {
      return this.model.upload.create({
        data: createUploadDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    try {
      return this.model.upload.findMany({});
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findOne(id: number) {
    try {
      return this.model.upload.findFirst({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    try {
      return this.model.upload.update({
        where: {
          id: id,
        },
        data: updateUploadDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  remove(id: number) {
    try {
      return this.model.upload.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
