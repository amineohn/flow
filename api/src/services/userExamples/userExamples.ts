import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const userExamples = () => {
  return db.userExample.findMany()
}

export const userExample = ({ id }: Prisma.UserExampleWhereUniqueInput) => {
  return db.userExample.findUnique({
    where: { id },
  })
}

interface CreateUserExampleArgs {
  input: Prisma.UserExampleCreateInput
}

export const createUserExample = ({ input }: CreateUserExampleArgs) => {
  return db.userExample.create({
    data: input,
  })
}

interface UpdateUserExampleArgs extends Prisma.UserExampleWhereUniqueInput {
  input: Prisma.UserExampleUpdateInput
}

export const updateUserExample = ({ id, input }: UpdateUserExampleArgs) => {
  return db.userExample.update({
    data: input,
    where: { id },
  })
}

export const deleteUserExample = ({
  id,
}: Prisma.UserExampleWhereUniqueInput) => {
  return db.userExample.delete({
    where: { id },
  })
}
