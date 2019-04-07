require_relative "./util.rb"

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.add_new_jobs(category)
    job_api = "https://www.themuse.com/api/public/jobs?page=0&category="

    jobs = RestClient.get("#{job_api}#{category}")
    jobs = JSON.parse jobs
    jobs = jobs["results"]

    persist_jobs(jobs)
  end
end
