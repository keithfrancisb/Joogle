# == Schema Information
#
# Table name: companies
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  size       :string
#  desc       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Company < ApplicationRecord
  validates :name, presence: true

  
end
