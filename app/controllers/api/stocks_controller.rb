class Api::StocksController < ApplicationController
  def show
    render json: { name: "Apple", symbol: "APPL", prices: [1, 2, 3] }
  end

  def index
    render json: [
      { name: "Apple Inc.", symbol: "AAPL" },
      { name: "Google", symbol: "GOOG" }
    ]
  end
end
