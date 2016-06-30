Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :boards, only: [:index]
      resources :pins, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:create, :show, :index]
    resources :boards, only: [:create, :destroy, :show]
  end
end
