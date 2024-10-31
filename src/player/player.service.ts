import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepo: Repository<Player>,
  ) {}

  public async getPlayerByName(name: string): Promise<Player> {
    try {
      return await this.playerRepo.findOneBy({ name });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  public async getPlayerById(id: number): Promise<Player> {
    try {
      return await this.playerRepo.findOneBy({ id });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  public async createPlayer(dto: { name: string }): Promise<Player> {
    try {
      return await this.playerRepo.save({
        ...dto,
        levelsPlayed: [],
        highscore: 0,
      });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  public async updatePlayer(
    id: number,
    dto: { highscore: number; levelsPlayed: number[] },
  ): Promise<Player> {
    try {
      await this.playerRepo.update(id, { ...dto });
      return await this.getPlayerById(id);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}
