import { Request, Response } from 'express'
import DeleteEventService from '../../services/events/delete'

export default class CreateEventControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params

    const deleteEventService = new DeleteEventService()

    const event = await deleteEventService.execute(Code)

    return response.json(event)
  }
}
