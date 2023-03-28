class GoogleApiController < ApplicationController

#     before_action :authorize_google

#   def index
#     service = Google::Apis::CalendarV3::CalendarService.new
#     service.authorization = @google_credentials
#     @events = service.list_events('primary')
#   end

#   private

#   def authorize_google
#     @google_credentials = Google::Auth::UserRefreshCredentials.new(
#       client_id: ENV['GOOGLE_CLIENT_ID'],
#       client_secret: ENV['GOOGLE_CLIENT_SECRET'],
#       refresh_token: current_user.google_refresh_token,
#       scope: Google::Apis::CalendarV3::AUTH_CALENDAR_READONLY,
#       redirect_uri: google_oauth2_callback_url
#     )

#     if @google_credentials.expired?
#       @google_credentials.refresh!
#       current_user.update(google_access_token: @google_credentials.access_token)
#     end
#   end
    
    
end
