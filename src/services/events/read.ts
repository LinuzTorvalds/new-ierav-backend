import { PrismaClient } from '@prisma/client'

export default class ReadEventService {
  async execute(Code: string) {
    const prisma = new PrismaClient()

    const event = await prisma.events
      .findUnique({ where: { code: Code } })
      .finally(() => prisma.$disconnect())

    if (!event) throw new Error('No event found')

    return event
  }
}
