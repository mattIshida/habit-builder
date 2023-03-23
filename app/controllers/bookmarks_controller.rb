class BookmarksController < ApplicationController


    def index 
        bookmarks = @user.bookmarks
        render json: bookmarks, status: :ok
    end

    def create
        bookmark = Bookmark.create!(user: @user, 
        bookmarkable_type: params[:bookmarkable_type],
        bookmarkable_id: params[:bookmarkable_id])
        render json: @user.bookmarks, status: :created
    end

    private

    def bookmark_params
        params.permit(:bookmarkable_type, :bookmarkable_id)
    end
end
