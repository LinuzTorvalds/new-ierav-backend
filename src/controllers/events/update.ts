import { Request, Response } from 'express'
import UpdateEventService from '../../services/events/update'

export default class UpdateEventControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params

    const { Title, Description, Hour, date } = request.body

    const updateEventService = new UpdateEventService()

    const event = await updateEventService.execute(Code, {
      Title,
      Description,
      Hour,
      date,
    })

    return response.status(201).send('successfully updated :D  ' + event)
  }
}
