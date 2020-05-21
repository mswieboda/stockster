require 'csv'

puts "Parsing company stock CSV"
stocks = CSV.read("./company_stock_list.csv", headers: true).map do |row|
  { symbol: row["Symbol"], name: row["Name"] }
end

puts "Creating Stock records in bulk"
stocks = Stock.create(stocks)

puts "#{stocks.size} stocks created"
