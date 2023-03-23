require 'stripe'
require 'dotenv-rails'
Dotenv.load

Stripe.api_key = ENV['STRIPE_SECRET_KEY']

class PaymentsController < ApplicationController
skip_before_action :authorize, only: :create

    def calculate_order_amount(items)
        # Replace this constant with a calculation of the order's amount
        # Calculate the order total on the server to prevent
        # people from directly manipulating the amount on the client
        
        prices = {'lifetime'=> 1999}
        
        items.map {|i| prices[i['id']]||0}.sum
    end


    def create
        
        # content_type 'application/json'
        data = JSON.parse(request.body.read)
        payment_intent = Stripe::PaymentIntent.create(
            amount: calculate_order_amount(data['items']),
            metadata: data['metadata'],
            currency: 'usd',
            payment_method_types: ['card']
            # ,
            # automatic_payment_methods: {
            # enabled: true,
            # },
        )

        render json: {
            clientSecret: payment_intent['client_secret'],
            amount: payment_intent['amount']
            }, status: :created
    end


end
