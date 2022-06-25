import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'
import { hash } from 'bcryptjs'

type userRequest = {
  Name: string
  Email: string
  Password: string
  Charge: string
  Birthday: Date
  Sex: string
  MaritalStatus: string
  WeddingAnniversary?: Date
}

export default class UpdateUserService {
  async execute(
    Code: string,
    {
      Name,
      Email,
      Password,
      Charge,
      Birthday,
      Sex,
      MaritalStatus,
      WeddingAnniversary,
    }: userRequest
  ) {
    const prisma = new PrismaClient()

    if (!Code) throw new Error('Code incorrect')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.users
      .update({
        data: {
          code: uuid(),
          name: Name,
          email: Email,
          password: passwordHash,
          charge: Charge,
          birthday: Birthday,
          sex: Sex,
          maritalStatus: MaritalStatus,
          weddingAnniversary: WeddingAnniversary,
        },
        where: {
          code: Code,
        },
      })
      .finally(() => prisma.$disconnect())

    const userReturn = {
      code: user.code,
      name: user.name,
      email: user.email,
      charge: user.charge,
      birthday: user.birthday,
      sex: user.sex,
      maritalStatus: user.maritalStatus,
      weddingAnniversary: user.weddingAnniversary,
    }

    return userReturn
  }
}
