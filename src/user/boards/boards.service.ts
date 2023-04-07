import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
    private boards : Board[] = [];

    getAll() : Board[] {
        return this.boards;
    }

    getOne(id:string) : Board{
        const board = this.boards.find(board => board.id === +id);
        if(!board) {
            throw new NotFoundException(`Board with ID ${id} not found.`)
        }
        return board;
    }

    deleteOne(id:string) {
        this.getOne(id);
        this.boards.filter(board => board.id !== +id);
    }

    create(postData) {
        this.boards.push({
            id : this.boards.length + 1,
            ...postData
        })
    }

    update(id: string, updateData) {
        const board = this.getOne(id);
        this.deleteOne(id);
        this.boards.push({...board, ...updateData})
    }
}
