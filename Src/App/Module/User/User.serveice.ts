import { Users } from './User.Model'
import { GenerateUserId } from './User.Utils'
import { IUSER } from './User.interface'

const createUser = async (user: IUSER): Promise<IUSER | null> => {
  const id = await GenerateUserId()
  user.id = id
  const createdUser = await Users.create(user)
  if (!createdUser) {
    throw new Error('Failed to create User')
  }
  return createdUser
}
export default {
  createUser,
}

