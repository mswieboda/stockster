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
rbenv install 2.5.0
```

Ensure ruby switches locally in this directory via

```
$ rbenv local 2.5.0
$ ruby -v
ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-darwin17]
```

Install `bundler` for 2.5.0 via

```
gem install bundler -v 1.17.3
```

Install all ruby gems with

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


## Seed the Database from Stock CSV

[ ] TODO: rake task TBD
