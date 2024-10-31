import { Level } from 'src/levels/levels.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Card extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  word: string;

  @Column()
  isCorrect: boolean;

  @ManyToOne(() => Level, (level) => level.cards)
  level: Level;
}
