import { Request, Response } from 'express'
import SignUpUserService from '../../services/users/signUp'

export default class SignUpUserControl {
  async handle(request: Request, response: Response) {
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

    const signUpUserService = new SignUpUserService()

    const user = await signUpUserService.execute({
      Name,
      Email,
      Password,
      Charge,
      Birthday,
      Sex,
      MaritalStatus,
      WeddingAnniversary,
    })

    return response.json(user)
  }
}
