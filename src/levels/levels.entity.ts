import { Card } from 'src/cards/card.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Complexity, GameMode } from './utils/mode.enum';

@Entity()
export class Level extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mode: GameMode;

  @Column()
  complexity: Complexity;

  @OneToMany(() => Card, (card) => card.level, { cascade: ['insert'] })
  cards: Card[];

  @Column()
  hint: string;
}
