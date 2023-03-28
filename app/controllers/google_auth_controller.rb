require 'google/apis/calendar_v3'
require 'google/apis/oauth2_v2'
# require 'google-id-token'
require 'googleauth'
require "googleauth/token_store"

class GoogleAuthController < ApplicationController

    skip_before_action :authorize, only: [:login_url, :callback] 

    def login_url
        render json:  {auth_url: client.authorization_uri.to_s} #, allow_other_host: true
      end
    
      def callback
        
        client.code = params[:code] if params[:code]
        client.fetch_access_token!
        puts "client=", client
        
        token_store = Google::Auth::Stores::RedisTokenStore.new(redis: Redis.new)

        calendar = Google::Apis::CalendarV3::CalendarService.new
        calendar.authorization = client

        userInfo = Google::Apis::Oauth2V2::Oauth2Service.new
        userInfo.authorization = client

        validator = GoogleIDToken::Validator.new
        payload = validator.check(client.id_token, client.client_id)#.payload
        #user_email = payload['email']
        #user_name = payload['name']
        
        google_info = userInfo.get_userinfo_v2
        byebug
        # 
        user = User.find_by(provider: payload["iss"], provider_id: google_info.id)
        if user&.valid? 
            user.update(email: google_info.email,
                     username: google_info.name)
        else
            user = User.create(
                provider: payload['iss'],
                provider_id: google_info.id,
                password: SecureRandom.hex(15),
                email: google_info.email,
                username: google_info.name, 
            )
        end
        # do |u| 
        #     user.update(
        #         email: google_info.email,
        #         username: google_info.name)
        
        # end

        if user.valid?
            session[:user_id] = user.id
            user.generate_first_attempt
        end

        # find or create by
        # if valid log in by setting session[:user_id] = user.id
        # else redirect
        
        # byebug

        redirect_to "http://localhost:4000/"

        # handle user authentication and redirection here
      end
    
      private
    
      def client
        @client ||= Signet::OAuth2::Client.new(
        access_type: 'offline',
          client_id: ENV['GOOGLE_CLIENT_ID'],
          client_secret: ENV['GOOGLE_CLIENT_SECRET'],
          authorization_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_credential_uri: 'https://accounts.google.com/o/oauth2/token',
          scope: 'email profile https://www.googleapis.com/auth/calendar',#Google::Apis::CalendarV3::AUTH_CALENDAR,#'https://www.googleapis.com/auth/calendar',
          redirect_uri: "http://localhost:3000/google_auth/callback"
        )
      end

end
