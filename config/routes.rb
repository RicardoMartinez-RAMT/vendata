Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/v1/auth'
  root 'application#index'

  get 'login' => 'session#new', as: 'login'

  namespace :api do
    namespace :v1 do
      resources :schemae, only: [:index] do
        post 'collections/new', on: :collection, action: 'add_collection', as: 'add_collection_to_schema'
        get 'collections', on: :collection, action: 'get_collections', as: 'get_collections_from_schema'
        get 'descriptions', on: :collection, action: 'get_descriptions', as: 'get_descriptions_from_schema'
        get 'parenthood', on: :collection, action: 'get_parenthood', as: 'get_parenthood_from_schema'
        get 'inheritance', on: :collection, action: 'get_inheritance', as: 'get_inheritance_from_schema'
        get 'constraints', on: :collection, action: 'get_constraints', as: 'get_constraints_from_schema'
        #get 'all', on: :collection, action: 'all'
        #get 'first', on: :collection, action: 'first'
      end
    end
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
