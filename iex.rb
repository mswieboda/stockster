IEX::Api.configure do |config|
  config.publishable_token = Rails.configuration.iex['publishable_token'] # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
  config.secret_token = Rails.configuration.iex['secret_token'] # defaults to ENV['IEX_API_SECRET_TOKEN']
  config.endpoint = Rails.configuration.iex['endpoint'] # defaults to 'https://cloud.iexapis.com/v1'
end
