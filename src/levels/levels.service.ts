import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/cards/card.entity';
import { PlayerService } from 'src/player/player.service';
import { Repository } from 'typeorm';
import { Level } from './levels.entity';
import { Complexity } from './utils/mode.enum';

@Injectable()
export class LevelService {
  constructor(
    @InjectRepository(Level)
    private levelRepo: Repository<Level>,
    private playerService: PlayerService,
  ) {}

  public async getLevelById(id: number): Promise<Level> {
    try {
      return await this.levelRepo.findOne({
        relations: ['cards'],
        where: { id },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async getRandomInterhypLevelForPlayer(
    playerId: number,
    complexity: Complexity,
  ): Promise<Level | undefined> {
    try {
      const { levelsPlayed } = await this.playerService.getPlayerById(playerId);
      return await this.levelRepo
        .createQueryBuilder('level')
        .where('level.id IN (:levelsPlayed)', { levelsPlayed })
        .andWhere('level.complexity = :complexity', { complexity })
        .getOne();
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  public async createLevel(dto: Omit<Level, 'id'>): Promise<Level> {
    try {
      return await this.levelRepo.save(dto);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
