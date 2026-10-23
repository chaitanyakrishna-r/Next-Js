import { error } from "console";


class ApiError extends Error{
    statusCode: number;
    errors: Array<any>[];

    constructor(statusCode: number, message: string ="something wend wrong",erorrs: any[] = []){
        super(message);
        this.statusCode = statusCode;
        this.errors= erorrs;
    }
}
