import app from './app'
import { env } from 'node:process'

const PORT: number = env.PORT || 3001

app.listen(PORT, () => console.log(`Pai ta on familia o_O on PORT ${PORT}`))
