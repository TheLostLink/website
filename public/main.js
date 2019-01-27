

let toggle = 0;

$(document).ready(function() {


	//Nav open menu
  $("#menu1").click(function() {
    if ($(".nav").css("display") == "none") {
      $(".nav").css("display", "block");
      $("#searchInput").css("display", "none");
      $(".nav").animate({ opacity: "1" }, "5000");
      $("#logo").animate({ marginLeft: "2%" }, "1000");
    } else {
      $(".nav").css("display", "none");
      $(".nav").animate({ opacity: "0" }, "slow");
      $("#logo").animate({ marginLeft: "43%" }, "slow");
      $("#searchInput").css("display", "none");
    }
  });

  $("#search").click(function() {
    if ($("#searchInput").css("display") == "none") {
      $("#searchInput").css("display", "block");
    } else if (!$("#searchInput").val().length == 0) {
      console.log($("#searchInput").val());
      $("#searchInput").css("display") == "none";

      //DO SOMETHING WITH SEARCH RESULTS
    } else {
      $("#searchInput").css("display", "none");
    }
  });

  /*TITLE PAGE*/

  //animate background
  $(".fasCaret").hover(
    function() {
      $("#cover").css("background-size", "105%");
      $(".fasCaret").css("color", "white");
      $(".coverHeading").css("color", "white");

      $("#cover").css(
        "background-image",
        "linear-gradient(rgba(0,0,0,.5), rgba(0,0 ,0,.5)), url(./images/peeps.png)"
      );
    },
    function() {
      $("#cover").css("background-size", "100%");
      $(".fasCaret").css("color", "black");
      $(".coverHeading").css("color", "black");
      $("#cover").css("background-image", "url(./images/peeps.png)");
    }
  );

  $(".fasCaretAbout").hover(
    function() {
      $(".fasCaretAbout").css("transform", "scale(1.5,1.5)");
      $(".fasCaretAbout").css("opacity", "1");
    },
    function() {
      $(".fasCaretAbout").css("transform", "scale(1,1)");
      $(".fasCaretAbout").css("opacity", "0.5");
    }
  );

  /*ABOUT PAGE*/
  

  //Animate image then go to next section
  $(".fasCaretAbout").click(function() {
    $(".aboutText").animate({ opacity: "0" }, 1000);

    setTimeout(function() {
      $("#about").addClass("back");
    }, 1000);
    $("#about").addClass("anim");

    setTimeout(function() {
      $("html, body").animate(
        {
          scrollTop: $("#codeID").offset().top
        },
        400
      );
    }, 1500);
    setTimeout(function() {
      $("#about").removeClass("back");
      $("#about").removeClass("anim");
      $(".fasCaretAbout").css("transform", "scale(1,1)");
      $(".aboutText").css("opacity", "1");
    }, 1900);
  });

  $(".fasCaret").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#aboutID").offset().top
      },
      200
    );
  });

  /* LEARN TO CODE*/

  //Go to next section
  $(".fasCaretLearn").hover(
    function() {
      $(".fasCaretLearn").css("transform", "scale(1.5,1.5)");
      $(".fasCaretLearn").css("opacity", "1");
    },
    function() {
      $(".fasCaretLearn").css("transform", "scale(1,1)");
      $(".fasCaretLearn").css("opacity", "0.5");
    }
  );

  $(".fasCaretLearn").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#blockID").offset().top
      },
      400
    );
  });


  //Open content
  $("#learnButton").on("click", function() {
    if (toggle == 0) {
      $("#learnTitle").css("padding-top", "10%");
      $("#learnContent").css("height", "auto");
      $("#learnContent").css("opacity", "1");
      $("#learnContent").css("visibility", "visible");
      $("#learnButton").text("Hide");

      toggle = 1;
    } else {
      $("#learnContent").css("opacity", "0");
      setTimeout(function() {
        $("#learnTitle").css("padding-top", "35%");
        $("#learnContent").css("height", "0%");
        $("#learnContent").css("visibility", "hidden");
        $("#learnButton").text("Learn More");
      }, 1000);
      toggle = 0;
    }
  });

  //CHECK AN ELEMENT IS WITHIN VIEW AND THEN EXECUTE ANIMATION
  $(window).scroll(function() {
    if ($(window).scrollTop() > 1400 || $(window).scrollTop() < 1600) {
      console.log("hiiiii");
      $("#learnToCodePic").css("left", "0%");
      $("#learnTitle").css("color", "black");
    }

    if ($(window).scrollTop() < 1000 || $(window).scrollTop() > 1800) {
      console.log("biiiii");
      $("#learnToCodePic").css("left", "-100%");
      $("#learnTitle").css("color", "#CAD3C2");
    }
  });

  /* LEARN TO CODE BLOCKCHAIN*/

  //Go to next section
  $(".fasCaretCode").hover(
    function() {
      $(".fasCaretCode").css("transform", "scale(1.5,1.5)");
      $(".fasCaretCode").css("opacity", "1");
    },
    function() {
      $(".fasCaretCode").css("transform", "scale(1,1)");
      $(".fasCaretCode").css("opacity", "0.5");
    }
  );



  //Open content
  $("#blockLearnButton").on("click", function() {
    if (toggle == 0) {
      $("#codeTitle").css("padding-top", "10%");
      $("#codeContent").css("height", "auto");
      $("#codeContent").css("opacity", "1");
      $("#codeContent").css("visibility", "visible");
      $("#blockLearnButton").text("Hide");

      toggle = 1;
    } else {
      $("#codeContent").css("opacity", "0");
      setTimeout(function() {
        $("#codeTitle").css("padding-top", "35%");
        $("#codeContent").css("height", "0%");
        $("#codeContent").css("visibility", "hidden");
        $("#blockLearnButton").text("Learn More");
      }, 1000);
      toggle = 0;
    }
  });

  //CHECK AN ELEMENT IS WITHIN VIEW AND THEN EXECUTE ANIMATION
  $(window).scroll(function() {
    if ($(window).scrollTop() > 1800) {
      console.log("hiiiii");
      $("#codeBlockchainPic").css("right", "0%");
      $("#codePic").css("right", "0%");
      $("#codeTitle").css("color", "black");
    }

    if ($(window).scrollTop() < 1600) {
      console.log("biiiii");
      $("#codeBlockchainPic").css("right", "-50%");
      $("#codePic").css("right", "-50%");
      $("#codeTitle").css("color", "white");
    }
  });

  //Button hover functions
});
