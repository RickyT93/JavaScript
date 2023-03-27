var jobsServices = {
    endpoint: "https://api.remotebootcamp.dev/api/jobs/"
};
  
//***********************************************
//************   ADD JOB *****************
//***********************************************

jobsServices.addJob = (payload) => {
    console.log("addJob is executing", payload);
  
    const config = {
      method: "POST", 
      url: jobsServices.endpoint,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" } }; 
   
      return axios(config).then((response) => {
        console.log(response.data.item, payload);
        return ({id:response.data.item,...payload})
       })
}

//***********************************************
//************ UPDATE BY ID *********************
//***********************************************
jobsServices.update = (id, payload) => 
{
  console.log("get update is executing");

  const config = {
    method: "PUT", 
    url:`${jobsServices.endpoint}${id}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" } };
    return axios(config).then((response) => {
     console.log(response);
     return ({id:response.data.item,...payload})
    })
}

//***********************************************
//************ GET ALL JOBS *********************
//***********************************************

jobsServices.getAll = (pageIndex, pageSize) =>
{
  console.log("getAll is executing");
  const config = {
    method: "GET",
    url: `${jobsServices.endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  
  return axios(config).then((response) => {
    console.log({ jobs: response.data.item.pagedItems });
     return ({ jobs: response.data.item.pagedItems });
   })
} 

//***********************************************
//************ GET JOB WITH SEARCH QUERY ********
//***********************************************

jobsServices.getJobByQuery = (pageIndex, pageSize, query) =>
{   
  console.log("getJobByQuery is executing");
  const config = {
    method: "GET",
    url: `${jobsServices.endpoint}search?pageIndex=${pageIndex}&pageSize=${pageSize}&searchTerm=${query}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  
  return axios(config).then((response) => {
    console.log(response.data.item.pagedItems);
    return (response.data.item.pagedItems)
   })
}
//https://api.remotebootcamp.dev/api/jobs/search?pageIndex=0&pageSize=10&searchTerm=stack

//***********************************************
//************ DELETE BY ID *********************
//***********************************************

jobsServices.deleteById  = (id) => 
 {
   console.log("delete is executing", id)
  
   const config = {
     method: "DELETE",
     url:`${jobsServices.endpoint}${id}`,
     crossdomain: true,
     headers: { "Content-Type": "application/json" } 
   }
 
   return axios(config).then((response) => {
    return id 
   })
}



//**********************************************
//************  GET JOB ID *********************
//**********************************************

jobsServices.getById  = (id) => 
{
  console.log("getById is executing");

  const config = {
    method: "GET", 
    url: `${jobsServices.endpoint}${id}`,   
    crossdomain: true,
    headers: { "Content-Type": "application/json" } };
  
     return axios(config).then((response) => {
     console.log(response.data.item);
     return (response.data.item)
    })
}
