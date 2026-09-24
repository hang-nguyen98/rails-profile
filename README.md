# README

PA 4 - Rails Profile Site

A personal profile and portfolio website rebuilt with Ruby on Rails based on my original Bootstrap profile site in PA 2.

The project demonstrates a basic Rails MVC structure using routes, a controller, and views. It does not require models, Active Record, or a database.

# Features
```
Home / landing page
About page
Portfolio / projects page
Experience page
Contact page
Responsive navigation
Bootstrap styling
Font Awesome icons
Contact form with client-side JavaScript validation and Formspree integration
Requirements
Ruby 3.4.8
Rails 7.2.3
Bundler
SQLite3
```
# System Dependencies

The project uses the following main gems:
```
Rails — web application framework
Bootstrap — responsive UI framework
SassC Rails — Sass support for the asset pipeline
jQuery Rails — jQuery integration
Font Awesome Sass — Font Awesome icons
Importmap Rails — JavaScript module management
Turbo Rails — page navigation and Turbo functionality
Stimulus Rails — Stimulus integration provided by the Rails setup
```
# Installation

Clone the repository and navigate to the project directory:
```
git clone <repository-url>
cd rails_profile
```
# Install the required gems:

`bundle install`

# Configuration

No environment variables or special configuration are required for the basic application.

The application uses Rails' asset pipeline for Bootstrap and Font Awesome.

JavaScript is managed using Rails Importmap.

# Database

This application does not use models, Active Record, or application data.

A database is therefore not required for the functionality of the website.

The sqlite3 gem is included because it is part of the standard Rails application setup.

# Routes

The application uses the following routes:
```
URL	        Controller	        Action	    View
/	        ProfileController	home	    profile/index.html.erb
/about	    ProfileController	about	    profile/about.html.erb
/contact	ProfileController	contact	    profile/contact.html.erb
/portfolio	ProfileController	portfolio	profile/portfolio.html.erb
/experience	ProfileController	experience	profile/experience.html.erb
```
# Running the Application

Start the Rails development server:

`bin/rails server`

Then open:

http://localhost:3000

The home page is available at /, with the other pages accessible through the navigation bar.

# Contact Form

The contact form uses Formspree to handle email submissions.

JavaScript is used on the Contact page to:

Validate the form fields.
Prevent submission when required fields are missing.
Submit valid form data to Formspree.
Display a success message after a successful submission.

No email service is hosted directly by the Rails application.

# Testing

No automated test suite has been implemented for this project.

To check the application's routes, run:

`bin/rails routes`

# Services

No additional services are required. This project is primarily intended for development and coursework demonstration.


# Project Structure

The main Rails files are organized as follows:

```
rails_profile/
├── app/
│   ├── controllers/
│   │   └── profile_controller.rb
│   │
│   ├── javascript/
│   │   ├── application.js
│   │   └── contact.js
│   │
│   ├── views/
│   │   ├── layouts/
│   │   │   └── application.html.erb
│   │   │
│   │   └── profile/
│   │       ├── index.html.erb
│   │       ├── about.html.erb
│   │       ├── portfolio.html.erb
│   │       ├── experience.html.erb
│   │       └── contact.html.erb
│   │
│   └── assets/
│       ├── config/
│       │   └── manifest.js
│       │
│       ├── images/
│       │   ├── IMG_2553.jpg
│       │   └── profile.png
│       │
│       └── stylesheets/
│           └── application.scss
│
├── config/
│   ├── routes.rb
│   └── importmap.rb
│
└── Gemfile
```


# Author

Hang Nguyen


