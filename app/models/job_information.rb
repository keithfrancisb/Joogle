# == Schema Information
#
# Table name: job_informations
#
#  id            :bigint(8)        not null, primary key
#  job_id        :integer
#  infoable_type :string
#  infoable_id   :bigint(8)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class JobInformation < ApplicationRecord
  belongs_to :infoable, polymorphic: true
  belongs_to :job
end
