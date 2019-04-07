
def set_location_ids(locations, info_id, type)
  locations.each do |location_info|
    name = location_info["name"]
    location = Location.find_by_name(name)

    if(!location)
      location = Location.new(name: name)
      location.save!
    end

    id = location.id

    if(type == "company")
      CompanyInformation.create!(
        company_id: info_id, 
        infoable_id: id, 
        infoable_type: :Location
      )
    else
      JobInformation.create!(
        job_id: info_id,
        infoable_id: id,
        infoable_type: :Location
      )
    end
  end
end

def set_industry_ids(industries, company_id)
  industries.each do |industry_info|
    name = industry_info["name"]
    industry = Industry.find_by_name(name)

    if(!industry)
      industry = Industry.new(name: name)
      industry.save!
    end
    
    id = industry.id

    CompanyInformation.create!(
      company_id: company_id, 
      infoable_id: id, 
      infoable_type: :Industry
    )
  end
end

def set_category_ids(categories, job_id)
  categories.each do |category_info|
    name = category_info["name"]
    category = Category.find_by_name(name)

    if(!category)
      category = Category.new(name:name)
      category.save!
    end
    
    id = category.id

    JobInformation.create!(
      job_id: job_id,
      infoable_id: id,
      infoable_type: :Category
    )
  end
end

def set_level_ids(levels, job_id)
  levels.each do |level_info|
    level = Level.find_by_level(level_info["name"])
    
    id = level.id

    JobInformation.create!(
      job_id: job_id,
      infoable_id: id,
      infoable_type: :Level
    )

  end
end

def get_company_id(company_info)
  company = Company.find_by_name(company_info["name"])

  if(!company)
    uri = "https://www.themuse.com/api/public/companies/#{company_info['id']}"
    more_info = RestClient.get(uri)
    more_info = JSON.parse(more_info)

    locations = more_info["locations"]
    industries = more_info["industries"]

    company = Company.new(
      name: more_info["name"], 
      size: more_info["size"]["name"],
      desc: more_info["description"]
    )
    company.save!

    set_location_ids(locations, company.id, "company")
    set_industry_ids(industries, company.id)
  end

  company.id
end

def persist_jobs(jobs)
  jobs.each do |job|
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
end