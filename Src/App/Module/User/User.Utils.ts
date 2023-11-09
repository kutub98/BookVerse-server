import { Users } from './User.Model'

const findLastUser = async (): Promise<string | undefined> => {
  const lastUser = await Users.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id ? lastUser?.id?.substring(2) : undefined
}

export const GenerateUserId = async () => {
  const currentId = await findLastUser()
  const numaricId = parseInt(currentId || '0', 10)
  const incrementId = (numaricId + 1).toString().padStart(4, '0')
  return incrementId
}
