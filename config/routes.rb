Rails.application.routes.draw do
  
  resources :bookings
  resources :events, only: [:index, :show]
  resources :users, only: [:create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get "/users", to: "users#show"
  get "/current_user", to: "users#show"
  # post "/signup", to: "users#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
