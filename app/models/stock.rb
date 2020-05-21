require 'iex-ruby-client'

class Stock < ApplicationRecord
  validates :symbol, uniqueness: true

  def price_chart_data
    client = IEX::Api::Client.new(
      publishable_token: Rails.configuration.iex["publishable_token"],
      secret_token: Rails.configuration.iex["secret_token"],
      endpoint: Rails.configuration.iex["endoint"]
    )

    client.chart(symbol.upcase).map do |data|
      prices = [data.low, data.high, data.open, data.close]

      avg_price = prices.sum / prices.size

      {
        avg_price: avg_price,
        label: data.label,
        date: data.date
      }
    end
  end
end
