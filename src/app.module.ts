import { Module } from '@nestjs/common';
import { BoardsController } from './user/boards/boards.controller';
import { BoardsService } from './user/boards/boards.service';

@Module({
  imports: [],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class AppModule {}
