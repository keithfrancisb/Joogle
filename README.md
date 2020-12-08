sdff

# README

## Setup Instructions

1. Install [PostgreSQL](https://www.postgresql.org/download/), [Node.js](https://nodejs.org/en/), and [Ruby](https://www.ruby-lang.org/en/downloads/). Use [Homebrew](https://brew.sh/) for fast and easy installation.
2. Once `Ruby` environment is set up, Install `Bundler` by typing in the terminal `gem install bundler`.
3. Clone this repository.
4. Navigate to the project folder.
5. Setup the `Rails` project by typing in the terminal `bundle install`.
6. Install `Node` dependencies by typing in the terminal `npm install`.
7. Setup the Postgres database by typing in the terminal `bundle exec rails db:setup`. This creates the database, sets up the tables, and seeds the database.
8. To run the full-stack app through the localhost (port 3000), type in the terminal `bundle exec rails server` to run the server needed and `npm start` to run webpack for the front end.


## Technologies & Libraries
* Ruby on Rails
* PostgreSQL
* React/Redux
* Webpack
* RestClient
