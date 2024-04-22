import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { AppModule } from '../app.module'; // AppModule을 가져옵니다.

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      //providers: [PostService],
      imports: [AppModule], // AppModule을 가져와서 테스트 모듈을 생성
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
