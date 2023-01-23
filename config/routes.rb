Rails.application.routes.draw do
  get 'homepage/index'
  root 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :restaurant_search, only: [:index]
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
