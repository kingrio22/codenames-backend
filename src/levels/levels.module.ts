import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from 'src/player/player.module';
import { LevelController } from './levels.controller';
import { Level } from './levels.entity';
import { LevelService } from './levels.service';

@Module({
  imports: [TypeOrmModule.forFeature([Level]), PlayerModule],
  controllers: [LevelController],
  providers: [LevelService],
})
export class LevelsModule {}
