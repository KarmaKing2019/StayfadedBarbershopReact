

    $(function() {
        /*SET THE INTERAVAL OF THE CAROUSEL*/
        $('.carousel').carousel({
            interval: 5000
        })
        $('#carouselButton').click(function() {
            /*get the current fa for the button*/
            if ($('#carouselButton').children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $('#carouselButton').children("i").removeClass("fa-pause");
                $('#carouselButton').children("i").addClass("fa-play");
            } else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-play");
                $("#carouselButton").children("i").addClass("fa-pause");
            }
        })
       
    });

    
    document.addEventListener("DOMContentLoaded", function(event) {
        const mm1 = new MetisMenu("#menu1").on("shown.metisMenu", function(event) {
          window.addEventListener("click", function mmClick1(e) {
            if (!event.target.contains(e.target)) {
              mm1.hide(event.detail.shownElement);
              window.removeEventListener("click", mmClick1);
            }
          });
        });
      });


