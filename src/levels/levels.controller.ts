import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { Level } from './levels.entity';
import { LevelService } from './levels.service';
import { CreateLevelDto } from './utils/create-level.dto';
import { Complexity, GameMode } from './utils/mode.enum';

@Controller('levels')
export class LevelController {
  public constructor(private levelService: LevelService) {}

  @Get('/id/:id')
  public async getLevelById(@Param('id') id: number): Promise<Level> {
    try {
      return await this.levelService.getLevelById(id);
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/random/:mode/:complexity/:playerId')
  public async getRandomLevelByMode(
    @Param('mode') mode: GameMode,
    @Param('playerId') playerId: number,
    @Param('complexity') complexity: Complexity,
  ): Promise<Level | undefined> {
    try {
      if (mode === 'INTERHYP') {
        return await this.levelService.getRandomInterhypLevelForPlayer(
          playerId,
          complexity,
        );
      }
      throw { error: 'not implemented yet' };
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  public async createLevel(@Body() dto: CreateLevelDto): Promise<Level> {
    try {
      return await this.levelService.createLevel(dto);
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
