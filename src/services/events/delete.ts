import { PrismaClient } from '@prisma/client'

export default class DeleteEventService {
  async execute(Code: string) {
    const prisma = new PrismaClient()

    await prisma.events
      .delete({ where: { code: Code } })
      .finally(() => prisma.$disconnect())

    return true
  }
}
