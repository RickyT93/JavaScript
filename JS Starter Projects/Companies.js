   <!-- 💡 All your CSS in here -->
    <style>
      .bg-image {
        background-image: url("https://timetoact-group.com/thumbnail_direct/20379?w=4000&h=1116&solid");
        height: 100vh;
        background-size: cover;
        display: block;
        justify-content: center;
        align-items: center;
        background-attachment: fixed;
      }
      h1 {
        font-family: Courier;
        font-size: 8em;
        font-weight: light;
        font-style: italic;
        font-variant: small-caps;
        text-align: left;
        position: absolute;
        left: 0px;
        top: 100px;
        color: antiquewhite;
      }
      .dropdown {
        width: 10%;
        height: 60px;
      }
      .rounded-circle {
        display: inline-block;
        width: 100px;
        height: 100px;
        animation: vibrate 0.5s;
      }
      .logo {
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 20%;
      }
      .img-fluid  {
        border-color: black;
        border: 50px;
      }

     .card-body  {
        height: 1300px;
     
      }
      label {
    margin-bottom: 20px;
      }

      label, input{
        display: block;
      }
      input { 
        margin-bottom:5px;
       }
       #modalBtn {
        margin-bottom: 15px;
        margin-left: 50px;
        margin-top: px;
        justify-content: center;
        align-items: center;
       }
      
      
    </style>
  </head>

  <body class="sabio" data-ins="pw-00">
    <!-- Do Not Edit or Remove this nav element -->
    <!-- <nav
      class="do-not-remove navbar navbar-expand-md navbar-dark bg-dark sabio"
    ></nav> -->
    

    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <!-- Container wrapper -->
        <div class="container-fluid">
          <!-- Toggle button -->
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
  
          <!-- Collapsible wrapper -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Navbar brand -->
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/75/original/sabio-logo-facebook-profile-picture-1-.jpg"
                height="50"
                width="50"
                alt="Welcome Logo"
                loading="lazy"
                class="logo"
              />
            </a>
            <!-- Left links -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/HomePage.html#">
                <button type="link" role="button" id="homePage" class="btn btn-outline-light">Home
                </button>
              </a>
              </li>
              <li class="nav-item">
                <a  href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/Friends.html">
                <button type="link" role="button" id="friends" class="btn btn-outline-light">Friends
                </button>
              </a>
              </li>
              <li class="nav-item">
                <a href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/Blogs.html">
                <button type="link" role="button" id="blogs" class="btn btn-outline-light">Blogs
                </button>
              </a>
              </li>
              <li class="nav-item">
                <a  href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/Tech_Companies.html">
                <button type="link" role="button" id="techCompanies" class="btn btn-outline-light">Tech Companies
                </button>
              </a>
              </li>
              <li class="nav-item">
                <a href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/Jobs.html">
                <button type="link" role="button" id="jobs" class="btn btn-outline-light">Jobs
                </button>
              </a>
              </li>
              <li class="nav-item">
                <a href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/Events.html">
                <button type="link" role="button" id="events" class="btn btn-outline-light">Events
                </button>
              </a>
              </li>
            </ul>
            <!-- Left links -->
          </div>
          <!-- Collapsible wrapper -->
  
          <!-- Right elements -->
          <div class="d-flex align-items-center">
            <a href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/Tech_Companies%20Displayed.html#">
              <button type="button" id="jobRenderPage" class="btn btn-success text-white px-3 me-2"> 
               Go To Tech Companies
             </button> 
           </a>
            <a href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/LoginPage_Final.html#">
             <button type="button" id="login" class="d-none btn btn-primary text-white px-3 me-2"> 
              Login
            </button> 
          </a>
          <a href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/Register%20Page.html">
          <button type="button" id="register" class="d-none btn btn-success me-3">
              Register
            </button>
          </a>
            <button type="button" id="logout" class="btn btn-danger me-3">
                Logout
              </button>
            <a
              class="btn btn-dark px-3 d-none"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              role="button"
              ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
            <!-- Notifications -->
         
            <!-- Avatar -->
            <div class="dropdown">
              <a
                class="dropdown-toggle align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy">
                  <label id="userName" class="text-white font-bold">Sabio Fellow</label>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right elements -->
        </div>
        <!-- Container wrapper -->
      </nav>
      <!-- Navbar -->

      <section class="vh-100" style="background-color: blue">
        <div class="container h-100">
          <div class="row d-flex  justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style="border-radius: 25px">
                <div class="card-body p-md-5">
                  <div class="row justify-content-left">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Add or Edit a Tech Company
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-none d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0"> 
                              <input
                                type="text"
                                id="jobId"
                                name="jobId"
                                class="form-control"
                              />
                              <label class="form-label" for="form3Example1c"
                                >jobId</label
                              >
                            </div>
                          </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i style='font-size:24px' class='fas  fa-lg me-3 fa-fw'>&#xf2bb;</i>
                          <div class="form-outline flex-fill mb-0"> 
                            <input
                              type="text"
                              name="name"
                              id="name"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example1c"
                              >Name</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i style='font-size:24px' class='fas  fa-lg me-3 fa-fw'>&#xf2bb;</i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="profile"
                              id="profile"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example3c"
                              >Profile</label
                            >
                          </div>
                        </div>
  
                        <div class="d-flex flex-row align-items-center mb-4">
                            <i style='font-size:24px' class='fas fa-lg me-3 fa-fw'>&#xf075;</i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="summary"
                              id="summary"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4c"
                              >Summary</label
                            >
                          </div>
                        </div>
  
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i style='font-size:24px' class='fas fa-lg me-3 fa-fw'>&#xf075;</i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="headline"
                              id="headline"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4cd"
                              >Headline</label
                            >
                          </div>
                        </div>
  
                        <div class="d-flex flex-row align-items-center mb-4">
                            <i style='font-size:24px' class="fas lg me-3 fa-f fa-envelope"></i> 
                            <!-- <i style='font-size:24px' class='fas fa-lg me-3 fa-fw'>&#xf7ce;</i>   <i class="fas fa-envelope"></i> -->

                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="contactInformation"
                              class="form-control"
                              id="contactInformation"
                            />
                            <label class="form-label" for="form3Example1c"
                              >Contact Information</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i style="font-size:24px" class='fas fa-lg me-3 fa-fw'>&#xf0c1;</i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                name="slug"
                                class="form-control"
                                id="slug"
                              />
                              <label class="form-label" for="form3Example1c"
                                >Slug</label>
                            </div>
                          </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i style='font-size:24px' class='fas fa-lg me-3 fa-fw'>&#xf3e0;</i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                name="statusId"
                                class="form-control"
                                id="statusId"
                              />
                              <label class="form-label" for="form3Example1c"
                                >Status</label
                              >
                            </div>
                          </div>
                            <!-- Button trigger modal -->
          <button type="button" id="modalBtn" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Image Type and Url</button>    

                             <!-- Modal -->
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 style="align-items: center;" class="modal-title" id="exampleModalLabel"></h1>
          <button type="button" id="modalButton" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div style="background-color: darkgray;" class="modal-body justify-content-center align-items-center" id="modalBody">
       
         <select  id="images" class="form-select d-flex flex-row align-items-center mb-4" aria-label="Default select example">
                            <option selected>Choose Image Type</option>
                            <option id="imageTypeId1" value="1">SEO</option>
                            <option id="imageTypeId2" value="2">Cover</option>
                            <option id="imageTypeId3" value="3">Main</option>
                            <option id="imageTypeId4" value="5">Other</option>
                            <option id="imageTypeId5" value="5">Logo</option>
                          </select>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i style="font-size:24px" class='fas fa-lg me-3 fa-fw'>&#xf0c1;</i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="url"
                                name="imageUrl"
                                class="form-control"
                                id="imageUrl"
                              />
                              <label class="form-label" for="form3Example1c"
                                >URL</label
                              >
                            </div>
                          </div>
        </div>
        <div style="background-color: darkslategrey;"class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
                      
                          <!-- <select  id="images" class="form-select d-flex flex-row align-items-center mb-4" aria-label="Default select example">
                            <option selected>Choose Image Type</option>
                            <option id="imageTypeId1" value="1">SEO</option>
                            <option id="imageTypeId2" value="2">Cover</option>
                            <option id="imageTypeId3" value="3">Main</option>
                            <option id="imageTypeId4" value="5">Other</option>
                            <option id="imageTypeId5" value="5">Logo</option>
                          </select> -->
                      
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i style="font-size:24px" class='fas fa-lg me-3 fa-fw'>&#xf0c1;</i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="url"
                                name="urls"
                                class="form-control"
                                id="urls"
                              />
                              <label class="form-label" for="form3Example1c"
                                >URLs</label
                              >
                            </div>
                          </div>
                          

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i style="font-size:24px" class='fas fa-lg me-3 fa-fw'>&#xf0c1;</i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                name="tags"
                                class="form-control"
                                id="tags"
                              />
                              <label class="form-label" for="form3Example1c"
                                >Tags</label
                              >
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i style="font-size:24px" class='fas fa-lg me-3 fa-fw'>&#xf0c1;</i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                name="friendIds"
                                class="form-control"
                                id="friendIds"
                              />
                              <label class="form-label" for="form3Example1c"
                                >Friend Id's</label
                              >
                            </div>
                          </div>

                          
  
  
                        <div
                          class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                        >
                          <button type="button" id="submit" class="btn d btn-primary btn-lg">submit</button>
                          <button type="button" id="update" class="btn btn-warning d-none btn-lg">update</button>
                        </div>

                      </form>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    <!-- <div class="container ajax sabio"></div> -->

    <!-- Do Not Edit or Remove this footer element -->
    <!-- <footer
      class="do-not-remove container-fluid footer mx-auto fb-targert sabio"
    >
      <p class="text-center">© Sabio.la 2019</p>
    </footer> -->

    <!--👇🏻 All your JavaScript code goes below here inside this script tag 👇🏻 -->
    <script id="candidateCode">
   function startUp() {
        console.log("firing up");
        wireHandlers();
        currentUser()
        getCurrentURL()
        editCompanyFromRenderList()
      } 

      function wireHandlers() {
        console.log("wire handlers working");

        //<!--* NAVBAR Links  --> 
        // $("#logout").on("click", logOutBtnClicked);   
        // $("#homePage").on("click", homePageClicked);
        // $("#friends").on("click", friendsPageClicked);
        // $("#blogs").on("click", blogsPageClicked);
        // $("#techCompanies").on("click", techCompaniesPageClicked);
        // $("#jobs").on("click", jobsPageClicked);
        // $("#events").on("click", eventsPageClicked);

          //<!--* Form Button  --> 
        $("#submit").on("click", submitBtnClicked)
      }

      function eventsPageClicked()
        {
          console.log("Events Page Clicked");
        }
      function jobsPageClicked ()
        {
          console.log("Jobs Link Clicked");
        }   
      function techCompaniesPageClicked ()
        {
          console.log("Tech Companies Link Clicked");
        }   
      function blogsPageClicked ()
        {
        console.log("Blogs Link Clicked");
        }
      function friendsPageClicked ()
        {
        console.log("Friends Link Clicked");
        }
      function homePageClicked ()
        {
        console.log("homePageClicked");
        }
      function  logOutBtnClicked ()
        {
        console.log("LogOut Btn Clicked");
        logOut()
        }
      function logOut() {
      
      usersService
      .userLogOut()
      .then(onUserLogOutSuccess)
      .catch(onUserLogOutError);
    }  
      var onUserLogOutSuccess = function (response, payload) {
        toastr.info("Logout Complete, Goodbye");
        console.log(response);
        if (response)
        {
          window.location.replace("http://localhost:1932/REST%20LABS%20AJAX/16-entities/LoginPage_Final.html#")
        }
        };  
      var onUserLogOutError = (error) => {
      //{toastr.info("Oh No, Something Happend! Try Again"), 
      console.warn(error, "onUserLogOutError")}
    
//<!--************************************************
//<!--************* GET CURRENT USER  ****************
//<!--************************************************
    
      function currentUser ()
      {
      console.log("Getting Current User");  
          usersService
          .getCurrentUser()
          .then(onCurrentUserSuccess)
          .catch(onCurrentUserError);
         }
      var onCurrentUserSuccess = function (response, payload) {
        toastr.info(`Welcome, ${response.name} `);
        console.log(response.id);
        var userId = response.id
      
       console.log(userId);
       getCurrentUserById(userId)

      }              
      onCurrentUserError = (error) => 
      {
      toastr.info("Oh No, Something Happend! Try Again"), 
      console.warn(error, "onCurrentUserError")}
      function getCurrentUserById(id)
      {
        console.log("Getting Detailed Record on User");
        usersService
          .currentUserById(id)
          .then(onGetUserIdServiceSuccess)
          .catch(onGetUserIdServiceError);
      }   
      var onGetUserIdServiceSuccess = (response) => {
        console.log("onGetUserIdServiceSuccess", response) 
        var avatar = response.avatarUrl
        var name = response.firstName
        console.log(avatar);
        writeToDom(avatar, name)
      };
      function writeToDom (avatar, name)
      {
        console.log("Updating Avatar For Current User");
        $(".rounded-circle").attr("src", avatar)
        $("#userName").text(name)
      }
    
    

    
      //<!--***** FILL FORM DATA *** -->   
      function   fillFormData(id, name, profile, summary, headline, contactInformation, slug, statusId, stringTags, stringUrls, numberFriendIds, imageType, imageUrl)  //<!--! USE THE ARGU. FILL FORM DATA 
      {
        // console.log(id, name, profile, summary, headline, contactInformation, slug, statusId, stringTags, stringUrls, numberFriendIds, imageType, imageUrl)
        $("#jobId").val(id)
        $("#name").val(name),
        $("#profile").val(profile),
        $("#summary").val(summary),
        $("#headline").val(headline),
        $("#contactInformation").val(contactInformation),
        $("#slug").val(slug),
        $("#statusId").val(statusId)
        $("#tags").val(stringTags),
        $("#urls").val(stringUrls)
        $("#friendIds").val(numberFriendIds)
        $("#images").val(imageType)
       $("#imageUrl").val(imageUrl)

      return fillFormData
      }



      
      //<!--***** GET FORM DATA *** --> 
  
  function getFormData() 
  {  console.log("Getting Form Data"); 

var data = {
name: $("#name").val(),
profile: $("#profile").val(),
summary: $("#summary").val(),
headline: $("#headline").val(),
contactInformation: $("#contactInformation").val(),
slug: $("#slug").val(),
statusId: $("#statusId").val(),
tags: $("#tags").val().split(","),
friendIds: $("#friendIds").val().split(","),
urls: $("#urls").val().split(","),
images:[ 
{imageTypeId: $("#images").val(), imageUrl: $("#imageUrl").val()} 
]

}
console.log(data);
return data
}      
      
  function submitBtnClicked ()
      {
        console.log("Submit Button Clicked");
       
        var jobId = $("#jobId").val()
        
     
        if (jobId > 0) 
        {                                   
           
           updateCompany()
        } else {
            addNewTechCo()
        }
        
        
      }

     function addNewTechCo()
     {
      console.log("Adding New Tech Company");
      var payload = getFormData()

      techCoServices
            .addCompany(payload)
            .then(onCoAddSuccess)
            .catch(onCoAddError);
            console.log(payload);
            
    }
  
var onCoAddSuccess = function (response, payload) {
    toastr.info("Company Added, Success") 
    console.log(response);  //<!--! USE THE PAYLOAD SEND TO FUNC WRITE TO DOM 
};

onCoAddError = (error) => {  
toastr.info("Something Went Wrong, Try Again") 
console.warn(error, "onCoAddError");
}



 //<!--***** GET CURRENT FRIEND FROM URL  *** --> 
  function getCurrentURL() 
      {   console.log("Getting URL");
        url = window.location.href

        var lastFive = url.substr(url.length - 5)
        console.log(lastFive);
        return lastFive
      }   
     

//<!--************************************************
//<!--************* EDIT COMPANY FROM JOB LIST  **********
//<!--************************************************
      function editCompanyFromRenderList()
      {
        console.log("Editing Existing Job");


        var urlId = getCurrentURL() 
        console.log(urlId);


          techCoServices
            .getById(urlId)
            .then(onGetCompanysIdServiceSuccess)
            .catch(onGetCompanysIdServiceError);
     
        
      }
      
      var onGetCompanysIdServiceSuccess = (response) => {
        console.log("onGetCompanysIdServiceSuccess", response); //<!--! USE THE RESPONSE SEND TO FUNC FILL FORM DATA 

          var id = response.id
          console.log(id);
          
          var name = response.name
          // console.log(response.name);
          var profile = response.profile
          // console.log(profile);
           var summary = response.summary
              // console.log(summary);
           var headline = response.headline
          //  console.log(headline);
          var contactInformation = response.contactInformation.data
          // console.log(contactInformation);
          var slug = response.slug
          //console.log(slug);
          var statusId = response.statusId
          //console.log(statusId);

          var imageArray = response.images
          console.log(imageArray);

          var mappedImageArray = imageArray.map(mappingImage)
          console.log(mappedImageArray[0].imageTypeId);
          var imageType = mappedImageArray[0].imageTypeId
          var imageUrl = mappedImageArray[0].imageUrl


          function mappingImage (image)
          {
           const object = {
             imageTypeId: image.imageTypeId,
             imageUrl: image.imageUrl
           }
           return object
          }

          var friendIds = response.friends
          console.log(friendIds);

          var mappedFriendIds = friendIds.map(mappingFriend)
          
          var numberFriendIds = Number(mappedFriendIds)
          console.log(numberFriendIds);

          function mappingFriend (friend)
          {
             var fId = friend.id
             return fId
          }
        

          var tags = response.tags
          console.log(tags);

          var mappedTags = tags.map(mappingTag)
          var stringTags = mappedTags.toString()
          console.log(stringTags);

          function mappingTag (tag)
          {
            return tag.tagName
          }
          
          console.log(mappedTags);


          var urls = response.urls
          var mappedUrls = urls.map(mappingUrls)
          
          var stringUrls = mappedUrls.toString()
          console.log(stringUrls);
          function mappingUrls (urlType)
          {
            return urlType.url
          }
          console.log(mappedUrls);

          

          fillFormData(id, name, profile, summary, headline, contactInformation, slug, statusId, stringTags, stringUrls, numberFriendIds, imageType, imageUrl)   
    

      }

      onGetCompanysIdServiceError = (error) => console.warn(error, "onGetJobIdServiceError");


 //<!--************************************************
//<!--************* PUT JOB  ************************
//<!--************************************************
    function updateCompany()

    {   var id = $("#jobId").val()
        console.log(jobId);
        console.log(`Updating By Id ${jobId}`);

     var data = {
id: $("#jobId").val(),
name: $("#name").val(),
profile: $("#profile").val(),
summary: $("#summary").val(),
headline: $("#headline").val(),
contactInformation: $("#contactInformation").val(),
slug: $("#slug").val(),
statusId: $("#statusId").val(),
tags: $("#tags").val().split(","),
friendIds: $("#friendIds").val().split(","),
urls: $("#urls").val().split(","),
images:[ 
{imageTypeId: $("#images").val(), imageUrl: $("#imageUrl").val()} 
]

}
  console.log(data);
        techCoServices
          .update(data.id, data)
          .then(onUpdateCompanyServiceSuccess) 
          .catch(onUpdateCompanyServiceError);
    }

      var onUpdateCompanyServiceSuccess = (response) => { 
        toastr.info("Company Updated, Success") 
        console.log("onUpdateCompanyServiceSuccess", response);


      };

      var onUpdateCompanyServiceError = (response) => {
        toastr.info("Company Not Updated, Failed") 
        console.error({ error: response });
      };
