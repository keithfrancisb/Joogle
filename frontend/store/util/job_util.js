// export const fetchJobs = async (searchTerm) => {
//   const data = { search_term: searchTerm };
//   const response = await fetch('api/jobs/', {
//     method: "GET",
//     body: JSON.stringify(data)
//   });

//   const json = await response.json();

//   return json;
// }

export const fetchJobs = (searchTerm) => {
  return fetch(`api/jobs?searchTerm=${searchTerm}`)
    .then(res => res.json());
};