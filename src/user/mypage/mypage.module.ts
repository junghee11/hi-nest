import { Module } from '@nestjs/common';
import { MypageController } from './mypage.controller';
import { MypageService } from './mypage.service';

@Module({
    imports : [],
    controllers : [MypageController],
    providers: [MypageService]
})
export class MypageModule {}
