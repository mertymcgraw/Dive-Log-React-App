Rails.application.routes.draw do

  root "dive_entries#index"

  resources :dive_entries, only: [:index, :create, :update, :destroy]
end
