class Api::StocksController < ApplicationController
  def find
    @stock = Stock.find_by(symbol: params[:symbol])

    render json: @stock.as_json(only: [:name, :symbol], methods: :price_chart_data)
  end

  def search
    @stocks = Stock.where("UPPER(name) LIKE ?", "#{params[:search].upcase}%").order(name: :asc).limit(15)
    puts @stocks.count
    render json: @stocks.as_json(only: [:name, :symbol])
  end
end
