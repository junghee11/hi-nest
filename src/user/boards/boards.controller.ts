import { Controller, Get, Post, Delete, Param, Put, Patch, Body, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './entities/board.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('user/boards')
export class BoardsController {

    constructor(private readonly boardsService : BoardsService) {}

    @Get()
    getAll() : Board [] {
        return this.boardsService.getAll();
    }
    
    @Get(":id")
    getOne(@Param("id") postId :number){
        console.log(typeof postId)
        return this.boardsService.getOne(postId);
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() postData : CreatePostDto){
        return this.boardsService.create(postData);
    }

    @Delete(":id")
    remove(@Param('id') postId: number){
        return this.boardsService.deleteOne(postId);
    }

    @Patch(':id')
    patch(@Param('id') postId: number, @Body() updateData) {
        return this.boardsService.update(postId, updateData);
    }
}
