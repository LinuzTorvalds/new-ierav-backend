import { PrismaClient } from '@prisma/client'
import moment from 'moment'

export default class WeddingAniversaryUserService {
  async execute(Email: string) {
    const prisma = new PrismaClient()

    const user = await prisma.users
      .findUnique({ where: { email: Email } })
      .finally(() => prisma.$disconnect())

    const today = new Date()

    const dateCompare = moment(today).format('DD-MM')

    if (
      dateCompare !=
      moment(user.weddingAnniversary).add(1, 'days').format('DD-MM')
    )
      return false

    return true
  }
}
