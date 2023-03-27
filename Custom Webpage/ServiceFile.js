ar entitiesService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/houstonTeams/"
  };
  
  
      //***********************************************
      //          GET ALL ENTITIES
      //          GET ID
      //          UPDATE ENTITIES
      //          DELETE ENTITIES
      //          ADD ENTITIES
      //***********************************************
  
  
  
    //***********************************************
    //               GET BY ENTITIES HANDLERS
    //***********************************************
  entitiesService.getAll = () =>
  {
    console.log("getEntities is executing");
    const config = {
      method: "GET",
      url: entitiesService.endpoint,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config).then((response) => {
      return response
     })
 }

  //***********************************************
  //                GET BY ID HANDLERS
  //***********************************************
 entitiesService.getById  = (id) => 
 {
   console.log("getById is executing");

   const config = {
     method: "GET", 
     url: `${entitiesService.endpoint}${id}`,   
     crossdomain: true,
     headers: { "Content-Type": "application/json" } };
   
      return axios(config).then((response) => {
      console.log(response);
      return (response)
     })
 }
   
   

    //***********************************************
    //                UPDATE HANDLERS
    //***********************************************
 entitiesService.update = (id, payload) => 
 {
   console.log("get update is executing");
 
   const config = {
     method: "PUT", 
     url:`${entitiesService.endpoint}${id}`,
     data: payload,
     crossdomain: true,
     headers: { "Content-Type": "application/json" } };
     return axios(config).then((response) => {
      console.log(response);
      return (payload)
     })
  }

     //.then((response) =>
   


//***********************************************
//                ADD HANDLERS
//***********************************************

 entitiesService.addEntity = (payload) => {
  console.log("addEntity is executing", payload);

  const config = {
    method: "POST", 
    url: entitiesService.endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" } }; 
 
    return axios(config).then((response) => {
      console.log(response.data.item, payload);
      return ({id:response.data.item,...payload})
     })
 }


 

   //***********************************************
  //                DELETE ENTITY HANDLERS
  //***********************************************
 entitiesService.deleteById  = (id) => 
 {
   console.log("delete is executing", id)
  
   const config = {
     method: "DELETE",
     url:`${entitiesService.endpoint}${id}`,
     crossdomain: true,
     headers: { "Content-Type": "application/json" } 
   }
 
   return axios(config).then((response) => {
    return id 
   })
}
