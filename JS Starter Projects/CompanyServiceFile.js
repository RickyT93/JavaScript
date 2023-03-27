var techCoServices = {
    endpoint: "https://api.remotebootcamp.dev/api/techcompanies/"
};
  
//***********************************************
//************   GET TECH COMPANIES *************
//***********************************************

techCoServices.getAll = (pageIndex, pageSize) =>
{
  console.log("getAll is executing");
  const config = {
    method: "GET",
    url: `${techCoServices.endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  
  return axios(config).then((response) => {
    console.log({ techCompanies: response.data.item.pagedItems });
     return ({ techCompanies: response.data.item.pagedItems });
   })
}

//***********************************************
//************ ADD TECH COMPANY *****************
//***********************************************


techCoServices.addCompany = (payload) => {
  console.log("addTech is executing", payload);

  const config = {
    method: "POST", 
    url: techCoServices.endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" } }; 
 
    return axios(config).then((response) => { 
      console.log(response.data.item, payload);
      return ({id:response.data.item,...payload})
     }) 
}

//***********************************************
//************ GET ALL Cos *********************
//***********************************************

techCoServices.getAll = (pageIndex, pageSize) =>
{
  console.log("getAll is executing");
  const config = {
    method: "GET",
    url: `${techCoServices.endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  
  return axios(config).then((response) => {
    console.log({ techCompany: response.data.item.pagedItems });
     return ({ techCompany: response.data.item.pagedItems });
   })
} 


//**********************************************
//************  GET COMPANY ID *********************
//**********************************************

techCoServices.getById  = (id) => 
{
  console.log("getById is executing");

  const config = {
    method: "GET", 
    url: `${techCoServices.endpoint}${id}`,   
    crossdomain: true,
    headers: { "Content-Type": "application/json" } };
  
     return axios(config).then((response) => {
     console.log(response.data.item);
     return (response.data.item)
    })
}

//***********************************************
//************ UPDATE BY ID *********************
//***********************************************
techCoServices.update = (id, payload) => 
{
  console.log("get update is executing");

  const config = {
    method: "PUT", 
    url:`${techCoServices.endpoint}${id}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" } };
    return axios(config).then((response) => {
     console.log(response);
     return ({id:response.data.item,...payload})
    })
}
