import { Request, Response } from 'express'
import CreateEventService from '../../services/events/create'

export default class CreateEventControl {
  async handle(request: Request, response: Response) {
    const { Title, Description, Hour, date } = request.body

    const createEventService = new CreateEventService()

    const event = await createEventService.execute({
      Title,
      Description,
      Hour,
      date,
    })

    return response.json(event)
  }
}
