import { Controller, Get, Post, Delete, Param, Put, Patch, Body, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './entities/board.entity';

@Controller('user/boards')
export class BoardsController {

    constructor(private readonly boardsService : BoardsService) {}

    @Get()
    getAll() : Board [] {
        return this.boardsService.getAll();
    }
    
    @Get(":id")
    getOne(@Param("id") postId :string){
        return this.boardsService.getOne(postId);
    }

    @Post()
    create(@Body() postData){
        return this.boardsService.create(postData);
    }

    @Delete(":id")
    remove(@Param('id') postId: string){
        return this.boardsService.deleteOne(postId);
    }

    @Patch(':id')
    patch(@Param('id') postId: string, @Body() updateData) {
        return this.boardsService.update(postId, updateData);
    }
}
