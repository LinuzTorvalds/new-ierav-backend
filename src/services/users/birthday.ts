import moment from 'moment'
import { PrismaClient } from '@prisma/client'

export default class BirthdayUserService {
  async execute(Email: string) {
    const prisma = new PrismaClient()

    const today = new Date()

    const user = await prisma.users
      .findUnique({ where: { email: Email } })
      .finally(() => prisma.$disconnect())

    const dateCompare = moment(today).format('DD-MM')

    if (dateCompare != moment(user.birthday).add(1, 'days').format('DD-MM'))
      return false

    return true
  }
}
