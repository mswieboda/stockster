IEX::Api.configure do |config|
  # config.publishable_token = 'publishable_token' # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
  # config.secret_token = 'secret_token' # defaults to ENV['IEX_API_SECRET_TOKEN']
  config.endpoint = 'https://sandbox.iexapis.com/v1' # defaults to 'https://cloud.iexapis.com/v1'
end
