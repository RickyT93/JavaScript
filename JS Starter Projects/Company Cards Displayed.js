 <!-- 💡 All your CSS in here -->
        <style>
             .logo {
            display: inline-block;
            width:100px;
            height:100px;
            animation: vibrate 0.5s;
            border-radius: 20%;
        }
        .rounded-circle {
            display: inline-block;
            width:100px;
            height:100px;
            animation: vibrate 0.5s;
        }
        .card-img {
          width: 100%;
          height: 15vw;
          object-fit: contain;
         
          
        }
        #targetCard {
          width: 20%;
          height: 21vw;
          object-fit: cover;
          background-color: whitesmoke;
          top: 45px;
          left: 45px;
          bottom: 25px;
          justify-content: center;
          align-items: center;
          margin-right: 2%;
          position: relative;
          box-shadow: 10px 10px;
          text-align: center;
        }
        </style>
    </head>

    <body class="sabio" data-ins="pw-00">
        <!-- Do Not Edit or Remove this nav element -->
        <!-- <nav class="do-not-remove navbar navbar-expand-md navbar-dark bg-dark sabio"></nav> -->
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
            <div class="container-fluid display:flex">
              <div class="row display:flex" id="card-deck">      
          </div>
        </div>
      </section>
               

         <!-- <div class="container ajax sabio"></div> -->

        <!-- Do Not Edit or Remove this footer element -->
        <!-- <footer class="do-not-remove container-fluid footer mx-auto  fb-targert sabio">
            <p class="text-center">© Sabio.la 2019</p>
        </footer> -->

        
    <script id="template" type="text/template">
        <div class="card mb-3" id="targetCard">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img id="images1" src="" class="img-fluid card-img"/>
            <a href="#!">
              <div class="mask" style="background-color: rgba(79, 190, 212, 0.15);"></div>
            </a>
          </div>
  
          <div class="card-body">
            <h5 id="name1"class="card-title font-bold">Card title</h5>
            <p id="headline1"class="card-subtitle">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="summary1" class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="slug1" class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="friends1" class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="id1" class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="profile1" class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="statusId1" class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="urls1" class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="tags1" class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <!-- Button trigger modal -->
            <button type="button" id="modalBtn" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</button>                                                                                                                         
  
            <!-- <div class="bottom: 50px justify-content-center modal-dialog modal-dialog-centered modal-dialog-scrollable">View More</div> -->
            <p  class="card-year d-none paragraph" id="id"></p>
              <button
              class="delete .my-button btn btn-primary btn btn-danger btn-small"
              type="button" id="delete1"
            >
              Delete
            </button>
            <button
              class="edit .my-button btn btn-primary btn-small"
              type="button" id="edit1"
            >
              Edit
            </button>
          </div>
        </div>
    
      </script>

        <!--👇🏻 All your JavaScript code goes below here inside this script tag 👇🏻 -->
        <script id="candidateCode">
 function startUp() {
        console.log("firing up");
        wireHandlers();
        currentUser()
        getAllCo()
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

          //<!--* Card Button --> 
       $("#card-deck").on("click", "#edit1", editBtnClicked)
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
      var onUserLogOutError = (error) => {  //{toastr.info("Oh No, Something Happend! Try Again"), 
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

  //<!--***********************************************
//<!--**********    GET ALL JOBS       **************
//<!--***********************************************    

    function getAllCo() {
        console.log("Rendering them now");
        techCoServices
          .getAll(0, 10) 
          .then(onGetTechCoSuccess)
          .catch(onGetTechCoError);
      }
    var onGetTechCoSuccess = (response) => { 
      
        console.log(response.techCompany)

        var rawData = response.techCompany
        console.log(rawData);
        processArrayByMapping(rawData);
       // writeToDomModalInfo(rawData)
    
      };

    var onGetTechCoError = (err) => {
        console.error(err);
      };



//<!--***********************************************
//<!--********  MAP AND RENDER  ALL JOBS   ********
//<!--***********************************************  

    function processArrayByMapping(arrayOfData) {
        let arrayOfJqTemplates = arrayOfData.map(mapSingleCompany);
        console.log("processArrayByMapping", arrayOfJqTemplates);

        

        appendToContainer(arrayOfJqTemplates);
      }

//<!--***** MAPPING OPERATION  *** --> 

      function mapSingleCompany(singleCompany) {
        // for (let index = 0; index < techCoInfo.length; index++) {
        //       var company  = techCoInfo[index]
        //       var option = $(`#option${index + 1}`)
        //         option.text(company.techCompanyName)
        //         option.val(company.id)
        //     }
            var index = 0
    
            //var listOfUrls = singleCompany.urls[0].url
        
       const mappedCompany = {
           name: singleCompany.name,
           headline: singleCompany.headline,
           summary: singleCompany.summary,
           slug: singleCompany.slug,
           statusId: singleCompany.statusId,
           imagesUrl: singleCompany.images[0].imageUrl,
           friends: singleCompany.friends[0].id,
           profile: singleCompany.profile, 
           tags: singleCompany.tags[0].tagName,
           urls:singleCompany.urls[0].url,
           id: singleCompany.id, 
        }; 

        console.log(mappedCompany);
       
       var newSingleTechCoTemplate = getTemplate();
       
        newSingleTechCoTemplate.find("#name1").text(mappedCompany.name);
        newSingleTechCoTemplate.find("#headline1").text(mappedCompany.headline);
        newSingleTechCoTemplate.find("#summary1").text(mappedCompany.summary);
        newSingleTechCoTemplate.find("#slug1").text(mappedCompany.slug);
        newSingleTechCoTemplate.find("#id").attr("id", mappedCompany.id);
        newSingleTechCoTemplate.find("#statusId1").text(mappedCompany.statusId); 
        newSingleTechCoTemplate.find(".paragraph").text(mappedCompany.id)
        newSingleTechCoTemplate.find("friends1").text(mappedCompany.friends)
        newSingleTechCoTemplate.find("profile1").text(mappedCompany.profile)
        newSingleTechCoTemplate.find("tags1").text(mappedCompany.tags)
        newSingleTechCoTemplate.find("urls1").text(mappedCompany.urls)
        newSingleTechCoTemplate.find(".card-img").attr("src", mappedCompany.imagesUrl)
        newSingleTechCoTemplate.find("#modalBtn").on("click", onViewClicked)

        return newSingleTechCoTemplate;
      }

        // function createStrings(array) {
        //   var stringsAr = array.map(getString);
          
      
       
        //   function getString(skill) {
        //   var strings = skill.${skill};
        //    return strings;
        //    }  
           
           
        //    var strings = stringsAr.slice(",");
        //   return strings;
          
        //   }


 function onViewClicked()

 {    
  console.log("Adding Information to Modal");
  
    
//  var jobCard = $(this).closest(".card");
//  let cardData = {
//   pay: jobCard.find("#pay1").text(),
//   title: jobCard.find("#title1").text(),
//   summary: jobCard.find("#summary1").text(),
//   description: jobCard.find("#description1").text(),
//   skills: jobCard.find("#skills1").text(),
//   slug: jobCard.find("#slug1").text(),
//   statusId: jobCard.find("#statusId1").text(),
//   techCoName: jobCard.find("#techCoName").text(),
//  }
//  console.log(cardData)
//  fillModalWindow(cardData)

  } 

  function fillModalWindow (job)
  {
    console.log("fillModalWindow", job);


  // $("#modalPay").find(".card-text").text(job.pay);
  // $("#modalTechCoName").find(".card-text").text(job.techCoName);
  // $("#modalDescription").find(".card-text").text(job.description);
  // $("#modalSummary").find(".card-text").text(job.summary)
  // $("#modalSkills").find(".card-text").text(job.skills)
  // $("#modalSlug").find(".card-text").text(job.slug)
  // $("#modalStatusId").find(".card-text").text(job.statusId)
  // $("#modalTitle").find(".card-text").text(job.title)




  // $("#modalSkills").text(strSkills);

  // $("#modalStatusId").text(job.statusId);
  // $("#modalSlug").text(job.slug);

  }










//<!--***********************************************
//<!--**********  GRAB TEMPLATE              ********
//<!--***********************************************  
      function getTemplate() {
        var htmlTemplate = $("#template").html();
        var htmlCloneTemplate = $(htmlTemplate).clone();
        return $(htmlTemplate);
      }

  //<!--***** APPEND TO CONTAINER  *** --> 
      function appendToContainer(addNewTemplate) {
        $($("#card-deck")).append(addNewTemplate);
      }
     


//<!--***********************************************
//<!--******** PASS ID AND INVOKE GET BY ID *********
//<!--***********************************************   
     function editBtnClicked()
      { 
       console.log("Edit Button Clicked");
     
        var techIdLocation = $(this)  
          .closest("div.card")
          .find(".paragraph")
          .text();
      
          console.log(techIdLocation); 

          editJob(techIdLocation)
      }



      function editJob (id)
      {
        console.log("Editing This Friend's Card");
        console.log(id);
        getTechCoById(id) 


        }  
 
 
 
//<!--***********************************************
//<!--******   NAVIGAE TO FORM PAGE TO MAKE EDIT ****
//<!--***********************************************
      function getTechCoById (id) 
      {
        console.log(`editing this Company's id: ${id}`);

        techCoServices
            .getById(id)
            .then(onGetCompanysIdServiceSuccess)
            .catch(onGetCompanysIdServiceError);
      }

      var onGetCompanysIdServiceSuccess = (response) => {
        console.log("onGetCompanysIdServiceSuccess", response); //<!--! USE THE RESPONSE SEND TO FUNC FILL FORM DATA 
          console.log(response.id);
          var passUrlId = response.id
          console.log(passUrlId);
          if (passUrlId)

          {
            window.location.replace(`http://localhost:1932/REST%20LABS%20AJAX/16-entities/Tech_Companies.html?=${passUrlId}`)
          } 

           }  
      

      onGetCompanysIdServiceError = (error) => console.warn(error, "onGetJobIdServiceError");   
   
   



