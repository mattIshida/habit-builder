class FollowsController < ApplicationController
    
    def create
        byebug
        follow = Follow.create!(follow_params)
    end

    private

    def follow_params
        params.permit(:follower_id, :followed_id)
    end
end
