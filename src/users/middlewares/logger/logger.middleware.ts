import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    // console.log('logger: ', req.originalUrl)
    // console.log('logger: ', req.method)

    console.log(`Logger: { url: ${req.originalUrl}, method: ${req.method}, origin: ${req.ip}, info: ${JSON.stringify(req.body)} }`)

    next();
  }
}
