import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Post } from '../../posts/entities/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Length(2, 50)
  @Column()
  fullName: string;

  @Column()
  email: string;


  @OneToMany(() => Post, (post) => post.user, {
    eager: true
  })
  posts: Post[];
}
