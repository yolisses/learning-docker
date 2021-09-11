import express from "express";
import { env } from "process";

const PORT = env.PORT || 3000

const app = express()

app.get('/', (req, res) => res.send({ hello: 'beautiful world' }))

app.listen(PORT, ()=>console.info(`Server running on http://localhost:${PORT}`))