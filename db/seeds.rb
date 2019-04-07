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

job_api = "https://www.themuse.com/api/public/jobs?page=0&category="
# https://www.themuse.com/api/public/companies/:id

# ------------------ Account Management ------------------
category = "Account%20Management"
ApplicationRecord.add_new_jobs(category)

# ---------------------- Education -----------------------
category = "Education"
ApplicationRecord.add_new_jobs(category)

# ----------------------- Finance ------------------------
category = "Finance"
ApplicationRecord.add_new_jobs(category)

# ------------------------ Retail -----------------------
category = "Retail"
ApplicationRecord.add_new_jobs(category)

# --------------------- Engineering ---------------------
category = "Engineering"
ApplicationRecord.add_new_jobs(category)

# --------------- Healthcare & Medicine -----------------
category = "Healthcare%20%26%20Medicine"
ApplicationRecord.add_new_jobs(category)

# --------------- Customer Service -----------------
category = "Customer%20Service"
ApplicationRecord.add_new_jobs(category)