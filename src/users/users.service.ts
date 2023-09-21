import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ModelService } from 'src/model/model.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private model: ModelService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    createUserDto.password = hashedPassword;

    return this.model.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.model.user.findMany();
  }

  async findOne(id: number) {
    return await this.model.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      );
    }

    return this.model.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.model.user.delete({ where: { id } });
  }
}
