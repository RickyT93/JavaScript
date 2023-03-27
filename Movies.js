      function startUp() {
        console.log("firing");
        wireHandlers();
        //$(".btn-danger").on("click", onDeleteMovie);
      }

      function getMovies() {
        var arrMovies = [];
        arrMovies[0] = {
          id: 1,
          title: "zombies",
          genre: "thriller",
          year: 1993,
          mainImage:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        };

        (arrMovies[1] = {
          id: 2,
          title: "raiders",
          genre: "drama",
          year: 1994,
          mainImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eSTakjPRBatCMcm9fiX2KON4RC-Pjox1L2hqotKsmqIZhNaTKCuBUZbHiw6lvms2uwc&usqp=CAU",
        }),
          (arrMovies[2] = {
            id: 3,
            title: "cowboys",
            genre: "horror",
            year: 1995,
            mainImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrv1hG97Ep_so_JAUOKDJdSxDvbryCpjqsVl1GSplx6dvNKGbpyPIlKfAIS7cByIKuSg&usqp=CAU",
          });

        (arrMovies[3] = {
          id: 4,
          title: "vikings",
          genre: "action",
          year: 1996,
          mainImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEKkM3sux3RBW9_jqcAN0uX9eRN2dyCXlyQ1A5JCjLlx4QLJfTTPTzIZSxEmzgTC579Y&usqp=CAU",
        }),
          (arrMovies[4] = {
            id: 5,
            title: "cops",
            genre: "documentary",
            year: 1997,
            mainImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_4SCyRFSoJ4UZ32hnFWk6SLFi3e5HsVOmjBxwdo8dm2Bhi4WS3d528iOCyf1gVNvS5Y&usqp=CAU",
          });
        return arrMovies;
      }

      function wireHandlers() {
        console.log("wire handlers working");
        $("#showMovies").on("click", onShowMovies);
        $("#emptyMovies").on("click", emptyAllMovies);
        //wireHandler will not invoke onDeleteMovie. DeleteMovie event moved to showMovies Function
      }

      function onDeleteMovie() {
        console.log("this button is firing up");
        $(this).closest("div.row.my-3.t-3").remove();
        $(".deleteMovie").on("click", onDeleteMovie);
        // $(".clone-container").closest("div.row.my-3.t-3").remove();

        //$(this).find("div.row.my-3.t-3").remove();
        //$("div.row.my-3.t-3").remove();
        // $("div.row.my-3.t-3").first().remove();
        // $("div.row.my-3.t-3").first().remove();
        // $(".clone-container").closest("div.row.my-3.t-3").remove();

        // var btnCommand = $(this);
        // var enclosingPerson = btnCommand.closest("div.row.my-3.t-3");
        // deleteMovieTemplate(enclosingPerson);

        // $(".clone-container").children().first().remove();

        // var enclosingPerson = btnCommand.closest("div.row.my-3.t-3").remove;
        // if (".btn-danger" == true) {
        //   $(this).closest("div.card-movie").remove();
        // }
        //  $(this).closest(".card").toggleClass("isSelected");(".card").toggleClass("isSelected");
        //$(".btn-danger").on("click", onDeleteMovie).remove();
        //$(".clone-container").children().first().remove();
        // $("div.row.my-3.t-3").remove();
        //console.log("Deleted");
        // $("div.row.my-3.t-3").remove();
      }
      //   function deleteMovieTemplate(jqObject) {
      //     console.log("an event was triggered");
      //     jqObject.remove();
      //   }

      function emptyAllMovies() {
        console.log("empty movies");
        $(".clone-container").empty();
      }

      function onShowMovies(e) {
        console.log(e);
        e.preventDefault();
        var movies = getMovies();
        console.log(movies);

        renderMovies(movies);
        $(".deleteMovie").on("click", onDeleteMovie);
      }

      function getTemplate() {
        var htmlCloneTemplateOne = $("#movieTemplate").html();
        return $(htmlCloneTemplateOne);
      }

      function renderMovies(moviesArr) {
        for (let index = 0; index < moviesArr.length; index++) {
          var element = moviesArr[index];

          var cloneTemplate = getTemplate();
          addToContainer(cloneTemplate);

          cloneTemplate.find(".card-title.mb-0").text(element.title);
          cloneTemplate.find(".card-year.text-black-50").text(element.year);
          cloneTemplate.find(".card-genre").text(element.genre);
          cloneTemplate.find(".card-img-top").attr("src", element.mainImage);
        }
      }

      function addToContainer(addNewTemplate) {
        $(".clone-container").append(addNewTemplate);
      }
