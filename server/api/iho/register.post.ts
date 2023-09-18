import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    if (!body?.username || !body?.email || !body?.password) {
        setResponseStatus(event, 400)
        return {
            message: 'Missing username, email or password'
        }
    }
    else if (body.password.length < 8) {
        setResponseStatus(event, 400)
        return {
            message: 'Password must be at least 8 characters'
        }
    }

    const user = await prisma.user.create({
        data: {
            username: body.username,
            email: body.email,
            password: body.password
        }
        })

        return {
            user
        }




})