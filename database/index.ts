import { server } from "./src/server"

const PORT = 3006

server.listen(PORT, () => {
    console.log(`Database listening on ${PORT}`)
})
