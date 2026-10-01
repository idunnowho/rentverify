import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: Request) {
  try {
    const origin = new URL(request.url).origin
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      ui_mode: 'hosted_page',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Rental application screening' },
            unit_amount: 5000,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/?payment=success`,
      cancel_url: `${origin}/?payment=cancelled`,
    })

    if (!session.url) {
      return NextResponse.json({ error: 'Unable to create checkout session.' }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[v0] Stripe checkout creation failed:', error)
    return NextResponse.json({ error: 'Unable to start secure payment.' }, { status: 500 })
  }
}
