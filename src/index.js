require('font-awesome-loader');
require('./formspree.js');
require('./jquery.min.js');
require('./jqfloat.js');
require('./style.sass');
require('./nubes.sass');
require('./index.html');


require("bxslider/dist/jquery.bxslider.min.css");
require("bxslider/dist/jquery.bxslider.js");


// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    $(".nav-toggle").click(function() {
        $(".nav-toggle").toggleClass('is-active');
        $(".nav-menu").toggleClass('is-active');
    });

    $(".nav-item").click(function(){
      if ($(".nav-menu").hasClass('is-active')) {
        $(".nav-toggle").toggleClass('is-active');
        $(".nav-menu").toggleClass('is-active');
      }
    });
})();

// Agregar logos
var navLogo = require("./images/logonav.svg");
$("#nav-logo").append(navLogo);

var logo = require("./images/logo.svg");
$("#logo").append(logo);

// Agregar pergamino.svg
var pergamino = require("./images/pergamino.svg");
$("#pergamino").append(pergamino);

// Agregar principios(?).svg
var principio1 = require("./images/principio1.svg");
$("#principio1").append(principio1);
var principio2 = require("./images/principio2.svg");
$("#principio2").append(principio2);
var principio3 = require("./images/principio3.svg");
$("#principio3").append(principio3);

// Agregar volantin.svg
var volantin = require("./images/volantin.svg");
$("#volantin").append(volantin);

// Agregar paragua.svg
var paragua = require("./images/paragua.svg");
$("#paragua").append(paragua)

// Agregar ninosfoot.svg
var ninosfoot = require("./images/ninosfoot.svg");
$("#ninosfoot").append(ninosfoot);

//
var Actividades = [{
		id: "espontaneo",
		title: "Teatro Espontáneo",
		svg: require("./images/espontaneo.svg"),
		jpg: require("./images/espontaneo.jpg"),
		txt: "Contribuye al desarrollo integral del niño por medio de la imaginación y el lenguaje, promoviendo la independencia, la voluntad, el pensamiento y el deseo de vida social."
	}, {
		id: "biblioteca",
		title: "Biblioteca Móvil",
		svg: "./images/biblioteca.svg",
		jpg: require("./images/biblioteca.jpg"),
		txt: "Leer le entrega al niño la posibilidad de meditar  y conocerse a si mismo y al entorno, descubriendo en cada una de las páginas  cosas nuevas que expandirán su imaginación."
	}, {
		id: "musica",
		title: "Exploración Musical",
		svg: "./images/musica.svg",
		jpg: require("./images/musica.jpg"),
		txt: "La experimentación con instrumentos musicales favorece el aprendizaje emocional de los niños, a través de ritmos y melodías ellos vivencian distintas sensaciones y sentimientos que benefician a su salud y autoestima."
	}, {
		id: "manualidades",
		title: "Arte y Manualidades",
		svg: "./images/manualidades.svg",
		jpg: require("./images/manualidades.jpg"),
		txt: "El arte y las  manualidades son una herramienta que agudiza  a los sentidos por medio de la expresión, enriqueciendo al niño en su capacidad de interpretarse y vincularse con la realidad."
	}, {
		id: "relajacion",
		title: "Técnicas de Relajación",
		svg: "./images/relajacion.svg",
		jpg: require("./images/relajacion.jpg"),
		txt: "La búsqueda del equilibrio y la armonía constituye una buena base para que, en el futuro, los pequeños disfruten de una vida adulta alegre y saludable.  El yoga ayuda a canalizar su energía y reafirma su autoestima."
	}, {
		id: "titeres",
		title: "Títeres",
		svg: "./images/titeres.svg",
		jpg: require("./images/titeres.jpg"),
		txt: "Los títeres son un medio de expresión y creatividad que permite a los niños desarrollar  su imaginación y familiarizarse con conceptos e ideas que enriquecen su personalidad."
	}, {
		id: "cuentos",
		title: "Cuentacuentos",
		svg: "./images/cuentos.svg",
		jpg: require("./images/cuentos.jpg"),
		txt: "Ayuda a los niños a trabajar la reflexión y toma de decisiones, la memorización y el lenguaje expresivo, ampliando su vocabulario y las habilidades sociales.  Fomenta el gusto por la lectura y el cuidados de los textos."
	}, {
		id: "dramaterapia",
		title: "Dramaterapia",
		svg: "./images/dramaterapia.svg",
		jpg: require("./images/dramaterapia.jpg"),
		txt: "Promueve un desarrollo terapéutico e integral en las personas, a través de la creación, imaginación, el arte y el lenguaje."
	}, {
		id: "ludoteca",
		title: "Ludoteca",
		svg: "./images/ludoteca.svg",
		jpg: require("./images/ludoteca.jpg"),
		txt: "El juego estimula la creatividad y la inteligencia, permitiendo a los niños aprender de forma entretenida. Este espacio permite el desarrollo de la memoria, la atención y el pensamiento matemático."
	}
];

Actividades.map(function (activity){

  var bxItem = document.createElement('li');
  $(".bxslider").append(bxItem);

  var slide = document.createElement('section');
  slide.classList = "hero is-fullheight slider-item";
  slide.id = activity.id;
  slide.style.backgroundImage = "url(" + activity.jpg + ")";
  $(bxItem).append(slide);

  var slideContent = document.createElement('div');
  slideContent.classList = "hero-body";
  $(slide).append(slideContent);
  
  var slideContainer = document.createElement('div');
  slideContainer.classList = "container";
  $(slideContent).append(slideContainer);

  var tileAncestor = document.createElement('div');
  tileAncestor.classList = "tile is-ancestor";
  $(slideContainer).append(tileAncestor);

  var tileParent = document.createElement('div');
  tileParent.classList = "tile is-parent is-4 right";
  $(tileAncestor).append(tileParent);

  var tile = document.createElement('article');
  tile.classList = "tile notification is-danger";
  $(tileParent).append(tile);

  var tileContent = document.createElement('div');
  tileContent.classList = "content";
  $(tile).append(tileContent);
  
  var slideTitle = document.createElement('h2');
  slideTitle.classList = "title is-2";
  slideTitle.innerText = activity.title;
  $(tileContent).append(slideTitle);
  
  var slideText = document.createElement('h4');
  slideText.classList = "subtitle is-4";
  slideText.innerText = activity.txt;
  $(tileContent).append(slideText);
});

$(document).ready(function(){
  $('.bxslider').bxSlider({
  	auto: true,
  	pager: false
  });
});

// Floatings

$(document).ready(function() {
  $('#volantin').jqFloat({
    width: 100,
    height: 100,
    speed: 1000
  });
});





// Smooth scrolling to anchor links:
//
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });