class Api::StocksController < ApplicationController
  def show
    render json: { name: "Apple", prices: [1, 2, 3] }
  end

  def index
    render json: []
  end
end
