import jwt, { JwtPayload, DecodeOptions } from "jsonwebtoken";
import { Response, NextFunction } from "express"
import { getEnviroments } from "../../config/enviroments"

//middleware de extraction de token
const verifyToken = (req: any, res: Response, next: NextFunction) => {
    const authorization = req.get('authorization');
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    } else { return res.status(401).send({ error: "Invalid authorization" }) }

    const decodedToken = jwt.decode(token, { complete: true, key: getEnviroments().SECRET_WORD } as DecodeOptions) as JwtPayload;

    if (!token || !decodedToken.payload.exp) {
        return res.status(401).json({ error: 'Token missing or invalid' })
    }

    req.password = req.body.password
    req.userId = decodedToken.payload.id

    next()
    return
}

export default verifyToken;