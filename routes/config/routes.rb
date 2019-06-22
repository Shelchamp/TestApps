Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # resources :users
  get 'users', to: 'users#index', as: 'users' # get all
  post 'users', to: 'users#create' # create one
  
  get 'users/:id', to: 'users#show', as: 'user' # get one
  get 'users/:id/edit', to: 'users#edit', as: 'edit_user' # retrieve info to edit

  
  patch 'users/:id', to: 'users#update' # update one
  put 'users/:id', to: 'users#update' # update one
  
  delete 'users/:id', to: 'users#destroy', as: 'delete_user' # delete one
end
