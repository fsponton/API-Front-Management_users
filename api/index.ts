import { server } from "./src/server"
import { getEnviroments } from "./src/config/enviroments"

const enviroments = getEnviroments()

server.listen(enviroments.PORT, () => {
    console.log(`Database listening on ${enviroments.PORT}`)
})
