Rails.application.routes.draw do
  resources :bookmarks
  resources :follows
  resources :tips
  resources :intentions
  resources :attempts
  resources :challenges
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  post '/signin', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/create-payment-intent', to: 'payments#create'
  post '/webhook', to: 'webhooks#create'

  get '/readers', to: 'users#index'
  get '/readers/:id', to: 'users#reader'

  get '/feed', to: 'users#feed'

end
