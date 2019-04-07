# == Schema Information
#
# Table name: company_informations
#
#  id            :bigint(8)        not null, primary key
#  company_id    :integer
#  infoable_type :string
#  infoable_id   :bigint(8)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class CompanyInformation < ApplicationRecord
  belongs_to :infoable, polymorphic: true
  belongs_to :company
end
