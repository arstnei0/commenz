import type { User } from "@auth/core/types"
import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log:
			import.meta.env.NODE_ENV === "development"
				? ["info", "query", "error", "warn"]
				: ["error"],
	})

if (import.meta.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export const getUserId = async (withEmail: { email: string }) => {
	// return await prisma.
}
