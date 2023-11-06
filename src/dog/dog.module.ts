import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DogEntity } from "./dog.entity";

@Module({
    imports:[TypeOrmModule.forFeature([DogEntity])],
    controllers:[],
    providers: [],
    exports: [],
})
export class DogModule {}