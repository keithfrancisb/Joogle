# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Company.destroy_all
Job.destroy_all

Category.destroy_all
Industry.destroy_all
Location.destroy_all

CompanyInformation.destroy_all
JobInformation.destroy_all

# Categories
# Account Management, Creative & Design, Data Science, Education, Finance,
# Healthcare & Medicine, Legal, Operations, Retail, Social Media & Community,
# Customer Service, Engineering, Sales

# https://www.themuse.com/api/public/jobs?page=0


Account_Management_jobs = RestClient.get "https://www.themuse.com/api/public/jobs?page=0&category=Account%20Management"
Account_Management_jobs = JSON.parse Account_Management_jobs
Account_Management_jobs = Account_Management_jobs["results"]

Account_Management_jobs.each do |job|
  title = job["name"]
  


end

