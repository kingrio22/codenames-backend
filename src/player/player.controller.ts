import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  HttpVersionNotSupportedException,
  Param,
  Post,
} from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  public constructor(private playerService: PlayerService) {}

  @Get('/name/:name')
  public async getByName(@Param('name') name: string): Promise<Player> {
    try {
      return await this.playerService.getPlayerByName(name);
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/id/:id')
  public async getById(@Param('id') id: number): Promise<Player> {
    try {
      return await this.playerService.getPlayerById(id);
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
  @Post()
  public async createPlayer(@Body() dto: { name: string }): Promise<Player> {
    try {
      return await this.playerService.createPlayer(dto);
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
