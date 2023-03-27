class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :token]

    # sign in
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            user.update(utc_offset: params[:utc_offset])
            render json: user, status: :created
        else 
            render json: {errors: ["Username or password invalid"]}, status: :unauthorized
        end
    end

    def token
        render json: { csrf_token: authenticity_token }
    end

    def omniauth
        data = request.env['omniauth.auth']
        user = User.find_or_create_by(provider: data[:provider], uid: data[:uid]) do |u|
            user.update(
                username: data[:info][:email],
                password: SecureRandom.hex(15)
            )
        end
        if user.valid?
            session[:user_id] = user.id
            redirect_to "/"
        else 
            redirect_to '/signup'
        end    
    end

    # log out
    def destroy
        session.delete :user_id
        head :no_content
    end

end
