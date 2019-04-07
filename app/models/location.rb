# == Schema Information
#
# Table name: locations
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord
  validates :name, presence: true

  has_many :locations_to_jobs,
    as: :infoable,
    class_name: :JobInformation

  has_many :jobs,
    through: :locations_to_jobs,
    source: :job

  has_many :locations_to_companies,
    as: :infoable,
    class_name: :CompanyInformation

  has_many :companies,
    through: :locations_to_companies,
    source: :company
end
