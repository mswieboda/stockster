Rails.application.routes.draw do
  namespace :api do
    get 'stocks/:symbol', to: 'stocks#find'
    get 'stocks', to: 'stocks#search'
  end
end
