import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;
    
    @IsNotEmpty()
    @IsNumber()
    readonly year : number;
    
    @IsNotEmpty()
    @IsString({ each : true})
    readonly genres : string[];
}