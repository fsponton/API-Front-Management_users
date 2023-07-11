import { NextFunction, Response } from "express"


const catchedAsyncCustomRequest = (fn: (req: any, res: Response, next: NextFunction) => Promise<any>) => {
    return function (req: any, res: Response, next: NextFunction) {
        fn(req, res, next).catch((err: any) => {
            next(err);
        });
    };
};

export default catchedAsyncCustomRequest;