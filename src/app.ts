import express from 'express'
import { Database } from './infra/shared/database/mongoose'
import { routes } from './routes'

const app = express()

const database = new Database()
database.mongoConnection()

app.use(express.json())
app.use(routes)

export { app }