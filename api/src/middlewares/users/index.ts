import catchedAsync from "../../utils/catchedAsync"
import verifyExistenceModule from "./verifyExistence"
import verifyLoginModule from "./verifyLogin"
import findUserModule from "./findUser"

export const verifyExistence = catchedAsync(verifyExistenceModule)
export const verifyLogin = catchedAsync(verifyLoginModule)
export const findUser = catchedAsync(findUserModule)

export { default as verifyToken } from "./verifyToken"
