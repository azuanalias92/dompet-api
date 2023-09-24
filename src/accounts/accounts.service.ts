import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { ModelService } from 'src/model/model.service';

@Injectable()
export class AccountsService {
  constructor(private model: ModelService) {}

  create(createAccountDto: CreateAccountDto) {
    try {
      return this.model.account.create({
        data: createAccountDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    try {
      return this.model.account.findMany({});
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  findOne(id: number) {
    try {
      return this.model.account.findFirst({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    try {
      return this.model.account.update({
        where: {
          id: id,
        },
        data: updateAccountDto,
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  remove(id: number) {
    try {
      return this.model.account.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
