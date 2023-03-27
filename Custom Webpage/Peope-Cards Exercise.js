  <!-- 💡 All your CSS in here -->
    <style>
      .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        margin-bottom: 10px;
        width: 55%;
        border-color: black;

        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }

      .card {
        background-color: lightgray;
      }

      .btn {
        width: 150px;
        justify-content: center;
        padding: 10px 40px;
        text-align: center;
        border-radius: 10px;
        flex-wrap: nowrap;
      }
      div {
        margin-bottom: 25px;
      }

      .card-title {
        margin-left: auto;
        margin-right: auto;
        width: 8em;
        text-align: center;
        color: black;
      }
      .card-subtitle {
        margin-left: auto;
        margin-right: auto;
        width: 8em;
        text-align: center;
        color: black;
      }
      .card-text {
        text-align: center;
        color: black;
      }
      #targetRow {
        height: 500px;
        width: 500px;
        padding-left: 35px;
        flex-wrap: nowrap;
      }
    </style>
  </head>

  <body class="sabio" data-ins="pw-00">
    <!-- Do Not Edit or Remove this nav element -->
    <nav
      class="do-not-remove navbar navbar-expand-md navbar-dark bg-dark sabio"
    ></nav>

    <!-- <div class="container ajax sabio"></div> -->

    <div class="container">
      <form>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label"></label>
          <input attribute="number" type="number" name="number"
          class="visibility:hidden d-none" id="idField" value= />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Team</label>
          <input
            type="text"
            attribute="text"
            name="text"
            class="form-control"
            id="teamInput1"
          />
          <div id="emailHelp" class="form-text">Example: "Patriots"</div>
        </div>
        <div class="mb-3">
          <label for="input" class="form-label">Favorite Player</label>
          <input
            attribute="text"
            type="text"
            name="text"
            class="form-control"
            id="favoritePlayer1"
          />
          <div id="emailHelp" class="form-text">Example: "Tom Brady"</div>
        </div>
        <div class="mb-3">
          <label for="input" attribute="Edit" class="form-label">Sport</label>
          <input
            type="text"
            attribute="text"
            name="text"
            class="form-control"
            id="sportIput1"
          />
        </div>
        <div id="emailHelp" class="form-text">Example: "Football"</div>
        <div class="mb-3">
          <label for="input" attribute="Edit" class="form-label"
            >Image Url</label
          >
          <input
            type="url"
            attribute="image"
            name="text"
            class="form-control"
            id="imageInput1"
          />
        </div>
        <div id="emailHelp" class="form-text">
          Example: "https://i.ebayimg.com/images/g/8TsAAOSwKbpjF5J8/s-l500.jpg"
        </div>

        <button
          type="button"
          id="update2"
          class=".my-button btn btn-warning d-none"
        >
          Update
        </button>
        <button
          type="button"
          id="clear1"
          class=".my-button btn btn-primary btn btn-danger btn-small"
        >
          Clear
        </button>
        <button type="button" id="submit1" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div class="Container margin-left: 2.5">
        <button type="button" id="render1" class="btn btn-success">
          Render
        </button>
      </div>
    </div>

    <div class="container d-flex" id="targetContainer"></div>

    <script id="template" type="text/template">
      <div class="card">
        <div
          class="bg-image"
        >
          <img
            src=" "
            class="img-fluid center card-img" style="width: 200px;"
          />
          <a href="#!">
            <div
              class="mask"
              style="background-color: rgba(251, 251, 251, 0.15)"
            ></div>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">Team</h5>
          <h6 class="card-subtitle">Favorite Player</h6>
          <p class="card-text">Sport</p>
          <p class="card-year d-none" value="id" >id</p>
          <div class="d-grid gap-2 d-md-block justify-content-center">
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
      </div>
    </script>

    <!-- Do Not Edit or Remove this footer element -->
    <footer
      class="do-not-remove container-fluid footer mx-auto fb-targert sabio"
    >
      <p class="text-center">© Sabio.la 2019</p>
    </footer>

    <!--👇🏻 All your JavaScript code goes below here inside this script tag 👇🏻 -->
    <script id="candidateCode">
      /////***********************************************
      /////      START
      /////***********************************************
      function startUp() {
        console.log("firing up");
        wireHandlers();
      }

      function wireHandlers() {
        console.log("wire handlers working");
        $("#submit1").on("click", submitBtnClicked);
        $("#render1").on("click", renderBtnClicked);
        $("#targetContainer").on("click", ".edit", editButtonClicked);
        $("#targetContainer").on("click", ".delete", deleteEntity);
        $("#update2").on("click", updateBtnClicked);
        $("#clear1").on("click", onClear);
      }
      function onClear() {
        console.log("Clearing Container Contents & Form Fields");
        $("#targetContainer").empty();
        clearFormData();
      }
      function submitBtnClicked() {
        console.log("Submit Button Clicked");

        addNewTeam();
        clearFormData();
      }

      function addNewTeam() {
        var payload = {
          team: $("#teamInput1").val(),
          sport: $("#sportIput1").val(),
          favoritePlayer: $("#favoritePlayer1").val(),
          imageURL: $("#imageInput1").val(),
        };
        entitiesService
          .addEntity(payload)
          .then(onEntityAddSuccess)
          .catch(onEntityAddError);
      }
      // //***********************************************
      // //      ADD NEW ENTITY  SUCCESS & ERROR HANDLERS
      // //***********************************************
      var onEntityAddSuccess = function (response, payload) {
        console.log(response);

        var id = response.id;
        var team = response.team;
        var sport = response.sport;
        var favoritePlayer = response.favoritePlayer;
        var imageURL = response.imageURL;
        console.log(id, team, sport, favoritePlayer, imageURL);
        //processArrayByMapping(response);
        writeToDomSingleItem(id, team, sport, favoritePlayer, imageURL);
      };

      onEntityAddError = (error) => console.warn(error, "onEntityAddError");

      function writeToDomSingleItem(id, team, sport, favoritePlayer, imageURL) {
        console.log("Displaying new single entity on DOM");
        var cardBodyTemplate = getTemplate();
        cardBodyTemplate.find(".card-title").text(team);
        cardBodyTemplate.find(".card-subtitle").text(favoritePlayer);
        cardBodyTemplate.find(".card-text").text(sport);
        cardBodyTemplate.find(".card-year").text(id);
        cardBodyTemplate.find(".img-fluid").attr("src", imageURL);
        prependToContainer(cardBodyTemplate);
      }

      function prependToContainer(addNewTemplate) {
        $($("#targetContainer")).prepend(addNewTemplate);
      }

      function renderBtnClicked() {
        console.log("Render Button Clicked");
        getAllEntities();
      }

      function getAllEntities() {
        console.log("Rendering them now");
        entitiesService
          .getAll()
          .then(onGetEntitiesSuccess)
          .catch(onGetEntitiesError);
      }
      // //***********************************************
      // //  GET ALL ENTITIES  SUCCESS & ERROR HANDLERS
      // //***********************************************
      var onGetEntitiesSuccess = (response) => {
        console.log({ entities: response.data.items });
        var entitiesArray = response.data.items;
        processArrayByMapping(entitiesArray);
      };

      var onGetEntitiesError = (err) => {
        console.error(err);
      };

      function processArrayByMapping(arrayOfData) {
        let arrayOfJqTemplates = arrayOfData.map(mapSingleItem);
        console.log("processArrayByMapping", arrayOfJqTemplates);

        appendToContainer(arrayOfJqTemplates);
      }

      function mapSingleItem(singleEntity) {
        newEntity = singleEntity;

        newEntity = {
          team: newEntity.team,
          sport: newEntity.sport,
          favoritePlayer: newEntity.favoritePlayer,
          imageURL: newEntity.imageURL,
          id: newEntity.id,
        };
        var newSingleEntityTemplate = getTemplate();
        newSingleEntityTemplate.find(".card-title").text(newEntity.team);
        newSingleEntityTemplate
          .find(".card-subtitle")
          .text(newEntity.favoritePlayer);
        newSingleEntityTemplate.find(".card-text").text(newEntity.sport);
        newSingleEntityTemplate.find(".card-year").text(newEntity.id);
        newSingleEntityTemplate
          .find(".img-fluid")
          .attr("src", newEntity.imageURL);

        console.log("mapSingleItem", newEntity);
        return newSingleEntityTemplate;
      }

      // //***********************************************
      // //  ClONE TEMPLATE
      // //***********************************************
      function getTemplate() {
        var htmlTemplate = $("#template").html();
        var htmlCloneTemplate = $(htmlTemplate).clone();
        return $(htmlTemplate);
      }

      function appendToContainer(addNewTemplate) {
        $($("#targetContainer")).append(addNewTemplate);
      }

      function editButtonClicked(e) {
        $("#submit1").prop("disabled", true);
        $("#update2").toggleClass("d-none");
        console.log("Edit Button Clicked");
        console.log($(this), e.currentTarget);
        var entityIdLocation = $(this)
          .closest("div.card")
          .find(".card-year")
          .text();

        getEntityId(entityIdLocation);
      }
      // //***********************************************
      // //  GET ENTITY ID
      // //***********************************************
      function getEntityId(id) {
        console.log(`editing this entity id ${id}`);

        entitiesService
          .getById(id)
          .then(onGetEntitiesIdServiceSuccess)
          .catch(onGetEntitiesIdServiceError);
      }
      // //***********************************************
      // // GET ENTITY ID  SUCCESS & ERROR HANDLERS
      // //***********************************************
      var onGetEntitiesIdServiceSuccess = (response) => {
        console.log("onGetEntitiesIdServiceSuccess", response);

        var team = response.data.item.team;
        var favoritePlayer = response.data.item.favoritePlayer;
        var sport = response.data.item.sport;
        var imageURL = response.data.item.imageURL;
        var id = response.data.item.id;
        console.log(team, favoritePlayer, sport, id);
        fillFormData(team, favoritePlayer, sport, imageURL, id);
      };
      var onGetEntitiesIdServiceError = (response) => {
        console.error({ error: response });
      };

      // //***********************************************
      // // FILL FORM DATA
      // //***********************************************
      function fillFormData(team, favoritePlayer, sport, imageURL, id) {
        console.log("filling this form out");

        $("#teamInput1").val(team),
          $("#sportIput1").val(sport),
          $("#favoritePlayer1").val(favoritePlayer),
          $("#imageInput1").val(imageURL),
          $("#idField").val(id);
      }

      function updateBtnClicked() {
        updateEntity();
        $("#submit1").prop("disabled", false);
        $("#update2").toggleClass("d-none");
      }

      function updateEntity() {
        var payload = {
          team: $("#teamInput1").val(),
          sport: $("#sportIput1").val(),
          favoritePlayer: $("#favoritePlayer1").val(),
          imageURL: $("#imageInput1").val(),
          id: $("#idField").val(),
        };
        console.log(payload.id);

        entitiesService
          .update(payload.id, payload)
          .then(onUpdateEntitiesServiceSuccess)
          .catch(onUpdateEntitiesServiceError);
      }

      var onUpdateEntitiesServiceSuccess = (response) => {
        console.log("onUpdateEntitiesServiceSuccess", response);
        clearFormData();

        var team = response.team;
        var favoritePlayer = response.favoritePlayer;
        var sport = response.sport;
        var imageURL = response.imageURL;
        var id = response.id;
        console.log(id);
        var updateEntityCard = $("#targetContainer")
          .children("div.card")
          .children(".card-body")
          .find(".card-year")
          .text(id);
        updateCardEntity(
          team,
          favoritePlayer,
          sport,
          imageURL,
          id,
          updateEntityCard
        );
      };
      var onUpdateEntitiesServiceError = (response) => {
        console.error({ error: response });
      };

      function updateCardEntity(
        team,
        favoritePlayer,
        sport,
        imageURL,
        id,
        updateEntityCard
      ) {
        console.log("Displaying Updated Card Data");

        // var updateEntityCard = $(this).closest("div.card");

        updateEntityCard.find(".card-title").text(team);
        updateEntityCard.find(".card-subtitle").text(favoritePlayer);
        updateEntityCard.find(".card-text").text(sport);
        updateEntityCard.find(".card-year").text(id);
        updateEntityCard.find(".img-fluid").attr("src", imageURL);
      }

      function deleteEntity() {
        console.log("Preparing to delete to an entity");

        var entityIdLocation = $(this)
          .closest("div.card")
          .children(".card-body")
          .find(".card-year")
          .text();
        console.log(entityIdLocation);
        $(this).closest("div.card").remove();

        deleteEntityById(entityIdLocation);
      }

      function deleteEntityById(id) {
        entitiesService
          .deleteById(id)
          .then(onEntityDeleteSuccess)
          .catch(onEntityDeleteError);
      }

      onEntityDeleteSuccess = (response) => {
        console.log("Deleting Now");

        console.log(response, "onEntityDeleteSuccess");
      };
      onEntityDeleteError = (error) =>
        console.warn(error, "onEntityDeleteError");

      // //***********************************************
      // // GET FORM DATA
      // //***********************************************
      function clearFormData() {
        var currentFormData = {
          team: $("#teamInput1").val(""),
          favoritePlayer: $("#favoritePlayer1").val(""),
          sport: $("#sportIput1").val(""),
          imageURL: $("#imageInput1").val(""),
          id: $("#idField").val(""),
        };

        return currentFormData;
      }
