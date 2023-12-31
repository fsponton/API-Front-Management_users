import jwt, { JwtPayload, DecodeOptions } from "jsonwebtoken";
import { Response, NextFunction } from "express"
import { getEnviroments } from "../../config/enviroments"
import { TokenError } from "../../utils/Errors";


//middleware de extraction de token
const verifyToken = (req: any, _res: Response, next: NextFunction) => {
    const authorization = req.get('authorization');
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    } else { throw new TokenError('Autorizacion invalida', 401) }

    const decodedToken = jwt.decode(token, { complete: true, key: getEnviroments().SECRET_WORD } as DecodeOptions) as JwtPayload

    if (!token || !decodedToken?.payload.exp) { throw new TokenError('Falta o no es valido el token recibido', 401) }

    req.token = decodedToken.payload

    return next()
}

export default verifyToken;