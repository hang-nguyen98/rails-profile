Rails.application.routes.draw do
  root "profile#home", as: :home

  get "/about", to: "profile#about", as: :about
  get "/portfolio", to: "profile#portfolio", as: :portfolio
  get "/experience", to: "profile#experience", as: :experience
  get "/contact", to: "profile#contact", as: :contact
end