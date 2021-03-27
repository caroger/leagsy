Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  resources :products, only: :show

  namespace :api, defaults: { format: :json } do
    resource :users, only: [:create]
    resource :session, only: %i[create destroy show]
    resources :products, only: %i[create show index]
  end
end
