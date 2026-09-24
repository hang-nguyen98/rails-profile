pin "bootstrap", to: "bootstrap.min.js", preload: true
pin "application", preload: true
pin "@popperjs/core", to: "popper.js", preload: true
# no preload for contact.js because it is only used on the contact page
pin "contact", to: "contact.js"
# hotwired/turbo-rails are required,
pin "@hotwired/turbo-rails", to: "@hotwired--turbo-rails.js" # @8.0.23
pin "@hotwired/turbo", to: "@hotwired--turbo.js" # @8.0.23
pin "@rails/actioncable/src", to: "@rails--actioncable--src.js" # @7.2.302

