require 'stripe'
require 'dotenv-rails'
Dotenv.load

Stripe.api_key = ENV['STRIPE_SECRET_KEY']

class PaymentsController < ApplicationController
skip_before_action :authorize, only: :create

    def calculate_order_amount(_items)
        # Replace this constant with a calculation of the order's amount
        # Calculate the order total on the server to prevent
        # people from directly manipulating the amount on the client
        50
    end


    def create
        
        # content_type 'application/json'
        data = JSON.parse(request.body.read)
    
        payment_intent = Stripe::PaymentIntent.create(
            amount: calculate_order_amount(data['items']),
            currency: 'usd',
            payment_method_types: ['card']
            # ,
            # automatic_payment_methods: {
            # enabled: true,
            # },
        )

        render json: {
            clientSecret: payment_intent['client_secret']}, status: :created
    end


end
