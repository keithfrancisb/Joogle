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

  has_many :jobs

  has_many :info,
    foreign_key: :company_id,
    class_name: :CompanyInformation

  has_many :locations,
    through: :info,
    source: :infoable,
    source_type: :Location

  has_many :industries,
    through: :info,
    source: :infoable,
    source_type: :Industry

end
