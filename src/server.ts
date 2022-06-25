import app from './app'
import * as dotenv from 'dotenv'
import { env } from 'node:process'

dotenv.config()

app.listen(env.PORT || 3001, () =>
  console.log(`Pai ta on familia o_O on PORT ${env.PORT}`)
)
