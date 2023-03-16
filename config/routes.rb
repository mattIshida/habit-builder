Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  post '/signin', to: 'sessions#create'
  delete '/logout', to: 'session#destroy'
  post '/signup', to: 'users#create'
  get '/autologin', to: 'users#show'

end
