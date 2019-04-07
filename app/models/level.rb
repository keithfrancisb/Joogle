class Level < ApplicationRecord
  validates :level, presence: true, unique: true
end