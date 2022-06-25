import { Request, Response } from 'express'
import BirthdayUserService from '../../services/users/birthday'

export default class BirthdayUserControl {
  async handle(request: Request, response: Response) {
    const { Email } = request.params

    const birthday = new BirthdayUserService()

    const user = await birthday.execute(Email)

    if (user == true) return response.json('0k')
    else return response.json('no')
  }
}
