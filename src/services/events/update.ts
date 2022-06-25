import { PrismaClient } from '@prisma/client'

type eventsRequest = {
  Title: string
  Description: string
  Hour: string
  date: Date
}

export default class UpdateEventService {
  async execute(
    Code: string,
    { Title, Description, Hour, date }: eventsRequest
  ) {
    const prisma = new PrismaClient()

    const event = await prisma.events
      .update({
        data: {
          title: Title,
          description: Description,
          hour: Hour,
          date: new Date(date),
        },
        where: { code: Code },
      })
      .finally(() => prisma.$disconnect())

    return event
  }
}
