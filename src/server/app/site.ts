import { z } from "zod"
import { protectedProcedure, router } from "../trpc"
import { prisma } from "../db"

export const site = router({
	create: protectedProcedure
		.input(
			z.object({
				name: z.string(),
			}),
		)
		.mutation(async ({ ctx: { user, session }, input }) => {
			return prisma.site.create({
				data: {
					name: input.name,
					userId: user.id,
				},
			})
		}),
	get: protectedProcedure.query(async ({ ctx: { user } }) => {
		return prisma.site.findMany({
			where: { userId: user.id },
			select: {
				id: true,
				name: true,
			},
		})
	}),
})
