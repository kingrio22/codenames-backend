import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm.config';
import { LevelsModule } from './levels/levels.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PlayerModule, LevelsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
