# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Parsing company stock CSV"
stocks = CSV.read("./company_stock_list.csv", headers: true).map do |row|
  { symbol: row["Symbol"], name: row["Name"] }
end

puts "Creating Stock records in bulk"
stocks = Stock.create(stocks)

puts "#{stocks.size} stocks created"
