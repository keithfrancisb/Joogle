# == Schema Information
#
# Table name: jobs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  desc       :string
#  company_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Job < ApplicationRecord
  validates :title, presence: true

  belongs_to :company

  has_many :info,
    foreign_key: :job_id,
    class_name: :JobInformation

  has_many :locations,
    through: :info,
    source: :infoable,
    source_type: :Location

  has_many :categories,
    through: :info,
    source: :infoable,
    source_type: :Category

  has_many :levels,
    through: :info,
    source: :infoable,
    source_type: :Level
end
