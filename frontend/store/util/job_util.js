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
    .then(res => {
      // debugger
      if (res.status === 200) {
        return res.json();
      } else {
        throw res.json();
        // throw "Search Term can't be blank!"
      }
    });
};