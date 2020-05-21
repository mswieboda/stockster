class Stock < ApplicationRecord
  validates :symbol, uniqueness: true

  def prices
    [13.37, 55.55, 33.03]
  end
end
