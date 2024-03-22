import { IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class ModelosDTO {
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    readonly fecha: Date;
}