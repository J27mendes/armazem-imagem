import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Image)
    private ImageRepository: Repository<Image>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async saveImage(originalname: string, path: string): Promise<Image> {
    const image = new Image();
    image.filename = originalname;
    image.path = path;

    return await this.ImageRepository.save(image);
  }
}
