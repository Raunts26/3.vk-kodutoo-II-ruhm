(function(){
  "use strict";

  var Gallery = function() {

    if(Gallery.instance) {
      return Gallery.instance;
    }

    Gallery.instance = this;

    /*
    Kataloogist loetakse failid sisse
    Pildi sisestamisel tuleb sisestada metaandmed, mis salvestatakse andmebaasi
    Muidu lambine galerii
    Peale vajutades võiks avada modali pildiga ning kuvada metaandmeid
    */

    this.init();
    };

    Gallery.prototype = {
      init: function() {

        this.loadImages();

      },

    loadImages: function() {
      $.ajax({
        url : "images/",
        success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpeg|jpg|png)$/) ) {
                  $("#gallery-img").append( "<div id='gallery-img' class='col-xs-6 col-md-3'><a class='thumbnail'><img class='image' src='"+ "images/" + val +"'></a></div>" );
              }
          });
        }
      });
    }





    };


    window.onload = function() {
      var app = new Gallery();

    };





}) ();
