import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String8252305' } },
    two: { data: { email: 'String9418672' } },
  },
})

export type StandardScenario = typeof standard
