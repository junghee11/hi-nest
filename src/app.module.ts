import { Module } from '@nestjs/common';
import { BoardsModule } from './user/boards/boards.module';
import { AuthModule } from './user/auth/auth.module';
import { MypageModule } from './user/mypage/mypage.module';

@Module({
  imports: [BoardsModule, AuthModule, MypageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
