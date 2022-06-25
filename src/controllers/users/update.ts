import { Request, Response } from 'express'
import UpdateUserService from '../../services/users/update'

export default class UpdateUserControl {
  async handle(request: Request, response: Response) {
    const { Code } = request.params
    const {
      Name,
      Email,
      Password,
      Charge,
      Birthday,
      Sex,
      MaritalStatus,
      WeddingAnniversary,
    } = request.body

    const updateUserService = new UpdateUserService()

    const user = await updateUserService.execute(Code, {
      Name,
      Email,
      Password,
      Charge,
      Birthday,
      Sex,
      MaritalStatus,
      WeddingAnniversary,
    })

    return response.status(201).send('successfully updated :D  ' + user)
  }
}
