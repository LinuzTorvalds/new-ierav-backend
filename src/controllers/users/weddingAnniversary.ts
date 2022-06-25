import { Request, Response } from 'express'
import WeddingBirthdayUserService from '../../services/users/weddingAnniversary'

export default class WeddingBirthdayUserControl {
  async handle(request: Request, response: Response) {
    const { Email } = request.params

    const WeddingBirthday = new WeddingBirthdayUserService()

    const user = await WeddingBirthday.execute(Email)

    if (user == true) return response.json('0k')
    else return response.json('no')
  }
}
