import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
