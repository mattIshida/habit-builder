class TipsController < ApplicationController

    def show
        challenge = Challenge.find(params[:id])
        render json: challenge, status: :ok
    end
end
