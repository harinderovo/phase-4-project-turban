Rails.application.routes.draw do
  
  resources :bookings #, only: [:create, :update, :destroy]
  resources :events, only: [:index, :show]
  resources :users, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"
  post "/signup", to: "users#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
