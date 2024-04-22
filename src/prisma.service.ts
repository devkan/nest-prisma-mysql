import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  // onModuleInit은 제거가능하며, 데이터베이스 연결이 실제로 필요할 때까지 연결을 하지 않을수도 있다.
  // 지연 연결 방식(lazy connection)은 애플리케이션의 초기 부팅 시간을 단축할 수 있으나, 있으면 초기에 디비에 연결을 해서 문제점이 있는지 체크하게 된다.
}
