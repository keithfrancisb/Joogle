# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative "./util.rb"

Company.destroy_all
Job.destroy_all

Category.destroy_all
Industry.destroy_all
Location.destroy_all
Level.destroy_all

CompanyInformation.destroy_all
JobInformation.destroy_all

Level.create(level: "Internship")
Level.create(level: "Entry Level")
Level.create(level: "Mid Level")
Level.create(level: "Senior Level")


# Categories
# Account Management, Creative & Design, Data Science, Education, Finance,
# Healthcare & Medicine, Legal, Operations, Retail, Social Media & Community,
# Customer Service, Engineering, Sales

# https://www.themuse.com/api/public/jobs?page=0&category=
# https://www.themuse.com/api/public/companies/:id


am_uri = "https://www.themuse.com/api/public/jobs?page=0&category=Account%20Management"
account_management_jobs = RestClient.get(am_uri)
account_management_jobs = JSON.parse account_management_jobs
account_management_jobs = account_management_jobs["results"]

account_management_jobs.each do |job|
  title = job["name"]
  desc = job["contents"]
  company = job["company"]
  
  levels = job["levels"]
  categories = job["categories"]
  locations = job["locations"]

  newJob = Job.new(title: title, desc: desc)
  newJob.company_id = get_company_id(company)
  newJob.save!
 
  set_location_ids(locations, newJob.id, "job")
  set_category_ids(categories, newJob.id)
  set_level_ids(levels, newJob.id)
end

