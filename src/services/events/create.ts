import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

type eventsRequest = {
  Title: string
  Description: string
  Hour: string
  date: Date
}

export default class CreateEventService {
  async execute({ Title, Description, Hour, date }: eventsRequest) {
    const prisma = new PrismaClient()

    const event = await prisma.events
      .create({
        data: {
          code: uuid(),
          title: Title,
          description: Description,
          hour: Hour,
          date: new Date(date),
        },
      })
      .finally(() => prisma.$disconnect())

    return event
  }
}
