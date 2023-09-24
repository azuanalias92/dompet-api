import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ModelService } from 'src/model/model.service';

@Injectable()
export class CategoriesService {
  constructor(private model: ModelService) {}

  create(createCategoryDto: CreateCategoryDto) {
    try {
      return this.model.category.create({
        data: createCategoryDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    try {
      return this.model.category.findMany({});
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findOne(id: number) {
    try {
      return this.model.category.findFirst({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      return this.model.category.update({
        where: {
          id: id,
        },
        data: updateCategoryDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  remove(id: number) {
    try {
      return this.model.category.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
