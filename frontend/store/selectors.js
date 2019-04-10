export const filterJobs = (jobs, filters) => {
  if(!filters.applyFilter) return jobs;

  const { companies, locations, levels, categories } = filters;
  if(
      Object.keys(companies).length === 0 &&
      Object.keys(locations).length === 0 &&
      Object.keys(levels).length === 0 &&
      Object.keys(categories).length === 0
      ) return jobs;

  return jobs.filter(job => {
    if(companies[job.company]) return true;
    if(job.levels.some(level => levels[level])) return true;
    if(job.categories.some(category => categories[category])) return true;
    if(job.locations.some(location => locations[location])) return true;
  });
};