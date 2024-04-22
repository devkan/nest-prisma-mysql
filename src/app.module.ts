import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma.service'; // PrismaService를 가져옵니다.

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService, PostService, PrismaService], // PrismaService를 providers 배열에 추가
})
export class AppModule {}
