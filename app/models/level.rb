# == Schema Information
#
# Table name: levels
#
#  id         :bigint(8)        not null, primary key
#  level      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Level < ApplicationRecord
  validates :level, presence: true, uniqueness: true

  has_many :levels_to_jobs,
    as: :infoable,
    class_name: :JobInformation

  has_many :jobs,
    through: :levels_to_jobs,
    source: :job
end
