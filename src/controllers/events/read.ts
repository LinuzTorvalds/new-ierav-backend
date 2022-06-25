import { Request, Response } from 'express'
import ReadEventService from '../../services/events/read'

export default class ReadEventControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params

    const readEventService = new ReadEventService()

    const event = await readEventService.execute(Code)

    return response.json(event)
  }
}
