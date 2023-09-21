import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { ModelService } from 'src/model/model.service';

@Injectable()
export class OrganizationsService {
  constructor(private model: ModelService) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    try {
      return this.model.organization.create({
        data: createOrganizationDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    try {
      return this.model.organization.findMany({});
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findOne(id: number) {
    try {
      return this.model.organization.findFirst({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    try {
      return this.model.organization.update({
        where: {
          id: id,
        },
        data: updateOrganizationDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  remove(id: number) {
    try {
      return this.model.organization.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
