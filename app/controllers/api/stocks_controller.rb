class Api::StocksController < ApplicationController
  def find
    @stock = Stock.find_by(symbol: params[:symbol])

    render json: @stock.to_json(only: [:name, :symbol, :prices])
  end

  def search
    @stocks = Stock.where("UPPER(name) LIKE ?", "#{params[:search].upcase}%").order(name: :asc).limit(15)
    puts @stocks.count
    render json: @stocks.to_json(only: [:name, :symbol])
  end
end
