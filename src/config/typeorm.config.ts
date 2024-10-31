import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Level } from 'src/levels/levels.entity';
import { Card } from 'src/cards/card.entity';
import { Player } from 'src/player/player.entity';

dotenv.config();

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: 'max',
  password: 'speedy9709',
  database: process.env.DB_NAME,
  entities: [Level, Card, Player],
  synchronize: true,
};
export default typeOrmConfig;
