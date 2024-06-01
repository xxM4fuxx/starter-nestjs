import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(){}

    @Get("test")
    async test(){
        return "hola desde user"
    }
}
