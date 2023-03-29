class FollowsController < ApplicationController
    
    def index 
        follows = @user.follows
        render json: follows, status_code: :ok
    end

    def create
        follow = Follow.find_or_create_by!(follow_params)
        render json: follow, status_code: :created
    end

    def destroy
        follow = Follow.find(params[:id])
        follow.destroy
        head :no_content
    end

    private

    def follow_params
        params.permit(:follower_id, :followed_id)
    end
end
