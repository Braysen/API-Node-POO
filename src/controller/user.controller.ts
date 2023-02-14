import { Request, Response } from "express";

export class UserController{
    getUser(_req: Request, res: Response){
        res.status(200).json({
            user: "user name test"
        });
    }
}