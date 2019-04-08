
json.extract! job, :id, :title, :desc

json.company job.company.name   

json.locations job.locations.map {|location| location.name}

json.categories job.categories.map {|category| category.name}

json.levels job.levels.map {|level| level.level}
