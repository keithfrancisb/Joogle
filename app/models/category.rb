# == Schema Information
#
# Table name: categories
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  validates :name, presence: true

  has_many :jobs_to_categories,
    as: :infoable,
    class_name: :JobInformation

  has_many :jobs,
    through: :jobs_to_categories,
    source: :job
end
