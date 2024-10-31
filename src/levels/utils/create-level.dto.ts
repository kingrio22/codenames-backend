import { Level } from '../levels.entity';

export type CreateLevelDto = Omit<Level, 'id'>;
