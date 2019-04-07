# == Schema Information
#
# Table name: industries
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Industry < ApplicationRecord
  validates :name, presence: true
end
