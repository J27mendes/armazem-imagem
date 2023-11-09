/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Res } from '@nestjs/common';
import { join } from 'path';
import { createReadStream } from 'fs';

@Controller('images')
export class ImageController {
  @Get(':filename')
  async serveImage(@Param('filename') filename, @Res() res): Promise<any> {
    const path = join(__dirname, 'uploads', filename);
    return createReadStream(path).pipe(res);
  }
}
