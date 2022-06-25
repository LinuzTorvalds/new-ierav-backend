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

export default class SignUpUserService {
  async execute({
    Name,
    Email,
    Password,
    Charge,
    Birthday,
    Sex,
    MaritalStatus,
    WeddingAnniversary,
  }: userRequest) {
    const prisma = new PrismaClient()

    if (!Email) throw new Error('Email incorrect')

    const userAlreadyExists = await prisma.users.findUnique({
      where: { email: Email },
    })

    if (userAlreadyExists) throw new Error('User already exists')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.users
      .create({
        data: {
          code: uuid(),
          name: Name,
          email: Email,
          password: passwordHash,
          charge: Charge,
          birthday: new Date(Birthday),
          sex: Sex,
          maritalStatus: MaritalStatus,
          weddingAnniversary: new Date(WeddingAnniversary),
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
