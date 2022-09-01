import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';


@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    private userService: UsersService
  ) {}


  async create(createPostDto: CreatePostDto) {

    const post = new Post();
    const user = await this.userService.findOne(createPostDto.user)
    post.title = createPostDto.title;
    post.user = user

    await this.postRepository.save(post)
    return post
  }

  findAll() {
    return this.postRepository.find({
      relations: {
        user: true
      }
    })
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({id})
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
