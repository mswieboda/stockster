# Stockster

## Installation - Back End

Clone this repo via

```
git clone git@github.com:mswieboda/stockster.git
```

```
cd stockster
```

Install Ruby 2.5 via [`rbenv`](https://github.com/rbenv/rbenv), [`asdf`](https://github.com/asdf-vm/asdf) or any similar Ruby version manager

```
brew install rbenv
```

Follow instructions from:
```
rbenv init
```

Restart your shell.

```
rbenv install 2.5.3
```

Ensure ruby switches locally to 2.5.3 in this directory via

```
$ rbenv local 2.5.3
$ ruby -v
```

Install `bundler` for this specific Ruby version via

```
gem install bundler -v 1.17.3
```

Install all Ruby gems with

```
bundle install
```

## Installation - Front End

Preferably in another terminal window/tab

Install Yarn via [Homebrew](https://brew.sh/)

```
brew install yarn
```

```
cd client
```

```
yarn install
```

## Running the app

In one terminal window/tab (from the root of the app):

```
bundle exec rails s -p 3001
```

In another terminal window/tab (from the root of the app):

```
yarn start
```

This will serve the front end React app in development mode on http://localhost:3000/ and proxy all requests to the Rails app http://localhost:3001/


## Setup and Seed the Database from Stocks CSV

```
bundle exec rake db:setup
```

This will drop, and create the DB, apply the current table schema, and run the seeds.

Currently, running the seeds will create Stock DB records by parsing the `company_stock_list.csv`.


## IEX keys

In order to perform API requests you'll need to add a Rails config file with IEX public and secret key info

```
# config/iex.yml

default: &default
  publishable_token: pk_xyz_123
  secret_token: sk_xyz_123
  endpoint: https://sandbox.iexapis.com/v1

development:
  <<: *default
  endpoint: https://sandbox.iexapis.com/v1

```

If your Rails server or console are running, you may need to stop them and restart `spring` just in case:

```
bundle exec spring stop
```

