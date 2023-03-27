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
            <a href="http://localhost:1932/REST%20LABS%20AJAX/16-entities/Jobs-displayed.html#">
              <button type="button" id="jobRenderPage" class="btn btn-success text-white px-3 me-2"> 
               Go To Jobs
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
            <div class="dropdown d-none">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger"
                  >1</span
                >
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">Some news</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Another news</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
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
                        Add or Edit a Job
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
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0"> 
                            <input
                              type="text"
                              name="Role"
                              id="Role"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example1c"
                              >Role</label
                            >
                          </div>
                        </div>
                  
                        <select  id="techCompany" class="form-select d-flex flex-row align-items-center mb-4" aria-label="Default select example">
                            <option selected>Tech Company</option>
                            <option id="option1" value="1">One</option>
                            <option id="option2" value="2">Two</option>
                            <option id="option3" value="3">Three</option>
                            <option id="option4" value="3">Four</option>
                            <option id="option5" value="3">Five</option>
                          </select>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i style='font-size:24px' class='fas  fa-lg me-3 fa-fw'>&#xf2bb;</i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="jobDescription"
                              id="jobDescription"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example3c"
                              >Job Description</label
                            >
                          </div>
                        </div>
  
                        <div class="d-flex flex-row align-items-center mb-4">
                            <i style='font-size:24px' class='fas fa-lg me-3 fa-fw'>&#xf075;</i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="jobSummary"
                              id="jobSummary"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4c"
                              >Job Summary</label
                            >
                          </div>
                        </div>
  
                        <div class="d-flex flex-row align-items-center mb-4">
                            <i style="font-size:24px" class='fas fa-lg me-3 fa-fw'>&#xf0c1;</i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="pay"
                              id="pay"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4cd"
                              >Pay</label
                            >
                          </div>
                        </div>
  
                        <div class="d-flex flex-row align-items-center mb-4">
                            <i style='font-size:24px' class='fas fa-lg me-3 fa-fw'>&#xf7ce;</i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="skills"
                              class="form-control"
                              id="skills"
                            />
                            <label class="form-label" for="form3Example1c"
                              >Skills</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i style='font-size:24px' class='fas fa-lg me-3 fa-fw '>&#xf4fc;</i>
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
  
  
                        <div
                          class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                        >
                          <button type="button" id="submit" class="btn d btn-primary btn-lg">submit</button>
                          <button type="button" id="update" class="btn btn-warning d-none btn-lg">update</button>
                        </div>

                      </form>
                        </div>
                        <div
                        class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                      >
                        <img
                          src="https://images.yourstory.com/cs/1/b3cc3444ab5e11e88691f70342131e20/Whatissoftwareandtypesofsoftwarewithexamples1575272423828jpg"
                          class="img-fluid"
                          alt="Sample image"
                        />
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
    <!-- <footer class="do-not-remove container-fluid footer mx-auto  fb-targert sabio">
            <p class="text-center">© Sabio.la 2019</p>
        </footer> -->

    <!--👇🏻 All your JavaScript code goes below here inside this script tag 👇🏻 -->
    <script id="candidateCode">
      function startUp() {
        console.log("firing up");
        wireHandlers();
        currentUser()
        getTechCompanies()
        getCurrentURL() 
        editJobFromRenderList()
      } 

      function wireHandlers() {
        console.log("wire handlers working");

        //<!--* NAVBAR Links  --> 
        $("#logout").on("click", logOutBtnClicked);   
        $("#homePage").on("click", homePageClicked);
        $("#friends").on("click", friendsPageClicked);
        $("#blogs").on("click", blogsPageClicked);
        $("#techCompanies").on("click", techCompaniesPageClicked);
        $("#jobs").on("click", jobsPageClicked);
        $("#events").on("click", eventsPageClicked);

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
        onUserLogOutError = (error) => {
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

      };
          
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

      var onGetUserIdServiceError = (response) => {
        console.error({ error: response });
      };
      
      function writeToDom (avatar, name)
      {
        console.log("Updating Avatar For Current User");
        $(".rounded-circle").attr("src", avatar)
        $("#userName").text(name)
      }

      function getTechCompanies()
      {
        console.log("Getting Tech Companies");

        techCoServices
         .getAll(0, 10)
         .then(onGetTechCoAddSuccess)
         .catch(onGetTechCoAddError);
      }

      
      var onGetTechCoAddSuccess = function (response) 
      {
        console.log("onGetTechCoAddSuccess", response);
        // console.log(response); 
        // console.log(response.techCompanies);
        var rawData = response.techCompanies
        //console.log(rawData);
        mappingTechCo(rawData) //<!--! USE THE PAYLOAD SEND TO FUNC WRITE TO DOM 
      };

      onGetTechCoAddError = (error) => console.warn(error, "onGetTechCoAddError");
      
//<!--************************************************
//<!--*********** MAPPING TECH COMPANY DATA **********
//<!--************************************************
      
      function mappingTechCo(arrayOfData) { 
       // console.log(arrayOfData);

        let techCoArray = arrayOfData.map(mapSingleTechCo);

        console.log("mappingTechCo", techCoArray);
        assignTechCojQuery(techCoArray)
      }


      function mapSingleTechCo(singleCo)
      {  var techCoObject = singleCo

         techCoObject = {
        techCompanyName: techCoObject.name,
        id: techCoObject.id
      }
      console.log(techCoObject);
      return techCoObject
    }

//<!--************************************************
//<!--* ASSIGNING TEXT AND VALUE USING TECH ARRY DATA* 
//<!--************************************************
    function assignTechCojQuery (techCoInfo)
        {
            console.log("Assinging Company Names");


            for (let index = 0; index < techCoInfo.length; index++) {
              var company  = techCoInfo[index]
              var option = $(`#option${index + 1}`)
                option.text(company.techCompanyName)
                option.val(company.id)
            }
            


            
            //  var companyName1 = $("#option1").text(techCoInfo[0].techCompanyName)
            //  var companyName2 = $("#option2").text(techCoInfo[1].techCompanyName)
            //  var companyName3 = $("#option3").text(techCoInfo[2].techCompanyName)
            //  var companyName4 = $("#option4").text(techCoInfo[3].techCompanyName)
            //  var companyName5 = $("#option5").text(techCoInfo[4].techCompanyName)

            //  var companyId1 = $("#option1").val(techCoInfo[0].id)
            //  var companyId2 = $("#option2").val(techCoInfo[1].id)
            //  var companyId3 = $("#option3").val(techCoInfo[2].id)
            //  var companyId4 = $("#option4").val(techCoInfo[3].id)
            //  var companyId5 = $("#option5").val(techCoInfo[4].id)    
        }



      //<!--***** GET FORM DATA *** --> 
      function getFormData() {
        console.log("Getting Form Data"); 
       var data = {
          title: $("#Role").val(),
          techCompanyId: $("#techCompany").val(),
          description: $("#jobDescription").val(),
          summary: $("#jobSummary").val(),
          pay: $("#pay").val(),
          skills: $("#skills").val().split(","),
          slug: $("#slug").val(),
          statusId:$("#statusId").val(),
        }
        console.log(data);
        return data
    }

      

      //<!--***** FILL FORM DATA *** -->   
      function  fillFormData(title, pay, description, slug, techCompanyId, summary, statusId, skills) //<!--! USE THE ARGU. FILL FORM DATA 
      {
        console.log(title, pay, description, slug, techCompanyId, summary, statusId, skills);
        $("#Role").val(title),
        $("#techCompany").val(techCompany.id),
        $("#jobDescription").val(description),
        $("#jobSummary").val(summary),
        $("#pay").val(pay),
        $("#skills").val(skills),
        $("#slug").val(slug),
        $("#statusId").val(statusId)
      return fillFormData
      }


//<!--************************************************
//<!--************* POST JOB  ************************
//<!--************************************************
      
    
    function submitBtnClicked ()
      {
        console.log("Submit Button Clicked");
        var jobId = $("#jobId").val()
        
        // jobId > 0 ? update() : addNewJob()
        if (jobId > 0) 
        {                                   
            //addNewJob() === false
           updateJob()
        } else {
            addNewJob()
        }
        
        
      }

    function addNewJob()
    {
    console.log("Adding New Job")
    var payload = getFormData()
        jobsServices
            .addJob(payload)
            .then(onJobAddSuccess)
            .catch(onJobAddError);
            console.log(payload);
    }

var onJobAddSuccess = function (response, payload) {
    toastr.info("Job Added, Success") 
    console.log(response);  //<!--! USE THE PAYLOAD SEND TO FUNC WRITE TO DOM 
  
  var title = response.title;
  var pay = response.pay;  
  var description = response.description
  var id = response.id
  var jobId = $("#jobId").val(id)
  var slug = response.slug
  var techCompanyId = response.techCompanyId
  var summary = response.summary
  var statusId = response.statusId
  var skills = response.skills

  console.log(title, pay, description, slug, techCompanyId, summary, statusId, skills);

  fillFormData(title, pay, description, slug, techCompanyId, summary, statusId, skills)
  //updateOnSubmit(id)
//   if (title && pay && description && slug && techCompanyId && summary && statusId && skills)
//   {
//     toastr.info("Job Added, Success") 
//   } else {
//     toastr.info("Require all input Fields") 
//   }
};

onJobAddError = (error) => {  
toastr.info("Something Went Wrong, Try Again") 
console.warn(error, "onJobAddError");
}


//<!--************************************************
//<!--************* PUT JOB  ************************
//<!--************************************************
    function updateJob()

    {   var jobId = $("#jobId").val()
        console.log(jobId);
        console.log(`Updating By Id ${jobId}`);

        var payload =  data = {
          title: $("#Role").val(),
          techCompanyId: $("#techCompany").val(),
          description: $("#jobDescription").val(),
          summary: $("#jobSummary").val(),
          pay: $("#pay").val(),
          skills: $("#skills").val().split(","),
          slug: $("#slug").val(),
          statusId:$("#statusId").val(),
          id: $("#jobId").val()
        }
        jobsServices
          .update(payload.id, payload)
          .then(onUpdateJobServiceSuccess) 
          .catch(onUpdateJobServiceError);
    }

      var onUpdateJobServiceSuccess = (response) => { 
        toastr.info("Job Updated, Success") 
        console.log("onUpdateJobServiceSuccess", response);


      };

      var onUpdateJobServiceError = (response) => {
        toastr.info("Job Not Updated, Failed") 
        console.error({ error: response });
      };

  //<!--***** GET CURRENT FRIEND FROM URL  *** --> 
  function getCurrentURL() 
      {  
        url = window.location.href

        var lastFive = url.substr(url.length - 5)
        console.log(lastFive);
        return lastFive
      }   
      //myurl.substr(myurl.length - 4);

      // function getUrlId(url)
      // { var gettingUrlId = getCurrentURL()
      //   var id = (gettingUrlId.substring(url.lastIndexOf("=") + 1))
      //   console.log(id);
      //   return id
      // }

//<!--************************************************
//<!--************* EDIT JOB FROM JOB LIST  **********
//<!--************************************************
      function editJobFromRenderList()
      {
        console.log("Editing Existing Job");


        // var currentUrl = getCurrentURL();
        // var cardId = getUrlId(currentUrl)
        // var numberCardId = Number(cardId.substring(0, 5))
        var urlId = getCurrentURL() 
        console.log(urlId);


          jobsServices
            .getById(urlId)
            .then(onGetJobIdServiceSuccess)
            .catch(onGetJobIdServiceError);
     
        
      }
      
      var onGetJobIdServiceSuccess = (response) => {
        console.log("onGetJobIdServiceSuccess", response); //<!--! USE THE RESPONSE SEND TO FUNC FILL FORM DATA 

          var title = response.title;
          var pay = response.pay;  
          var description = response.description
          var id = response.id
          var jobId = $("#jobId").val(id)
          var slug = response.slug
          var techCompanyId = 2
          var summary = response.summary
          var statusId = response.statusId
          var skills = response.skills

          console.log(title, pay, description, slug, techCompanyId, summary, statusId, skills);

          fillFormData(title, pay, description, slug, techCompanyId, summary, statusId, skills)     
    

      }

      onGetJobIdServiceError = (error) => console.warn(error, "onGetJobIdServiceError");

     
