# == Schema Information
#
# Table name: jobs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  level      :string
#  desc       :string
#  company_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Job < ApplicationRecord
  validates :title, presence: true

  belongs_to :company
end
