class IntentionsController < ApplicationController

    def index
        intentions = @user.intentions
        render json: intentions, status: :ok
    end

    def show
    end

    def create
        intention = Intention.create!(intention_params)
        render json: intention, status: :created
    end

    def update
    end

    def destroy
    end

    private

    def intention_params
        params.permit(:user_id, :attempt_id, :when, :where, :what, :image, :note, :time, :success)
    end
end
