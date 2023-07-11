import jwt, { JwtPayload, DecodeOptions } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { getEnviroments } from "../../../enviroments";
import { ResetPassword } from "../../../../types/types";
const prisma = new PrismaClient();

export default async ({ id, passwordHash }: { id: string; passwordHash: string }): Promise<ResetPassword> => {

    const user = await prisma.user.findUnique({ where: { id } });

    if (user?.resetToken) {

        const decode = jwt.decode(user.resetToken, { complete: true, key: getEnviroments().SECRET_WORD } as DecodeOptions) as JwtPayload;;

        const date = new Date();
        const expires = new Date(decode.payload.exp! * 1000);

        if (date < expires) {
            await prisma.user.update({
                where: {
                    id,
                },
                data: {
                    password: passwordHash,
                    resetToken: null,
                },
            });

            console.log(user)
            return user;
        }
    }
    return false;
};