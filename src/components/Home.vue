<template>  
<div >
       
    
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="first-slide" src="../assets/uc.png" alt="First slide">
          <div class="container">
            <div class="carousel-caption d-none d-md-block text-left">
              <h1 class="home-title">Universidad de Carabobo</h1>              
            </div>
          </div>
        </div>

         <div class="carousel-item">
          <img class="second-slide" src="../assets/qs-banner.jpg" alt="Second slide">
          <div class="container">
            <div class="carousel-caption d-none d-md-block">
              <h1 class="home-title">Ranking QS</h1>
              <p class="second-title">Considerado como el ranking global con más influencia, el Ranking QS de Universidades es una publicación anual de rankings de universidades realizado por Quacquarelli Symonds (QS)</p>
              
            </div>
          </div>
        </div>


        <div class="carousel-item">
          <img class="third-slide" src="../assets/the-2019.jpg" alt="Third slide">
          <div class="container">
            <div class="carousel-caption d-none d-md-block text-right">
              <h1 class="home-title">Rankings Universitarios</h1>
              <p class="second-title">Los rankings globales de universidades más establecidos son los producidos por el Ranking Académico de las Universidades del Mundo (ARWU), Times Higher Education (THE), y Quacquarelli Symonds (QS)</p>
            </div>
          </div>
        </div>
      </div>
       
        
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>


    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">ESTUDIANTES<span class="text-muted" style="font-size: 34px"></span></h2><!--br>Indicadores sobre estudiantes</br></span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p-->
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-fluid mx-auto" src="../assets/students.jpg" alt="Generic placeholder image">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 push-md-5">
          <h2 class="featurette-heading">DOCENTES<span class="text-muted" style="font-size: 34px"></span></h2><!--br>Indicadores sobre docentes</br></span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p-->
        </div>
        <div class="col-md-5 pull-md-7">
          <img class="featurette-image img-fluid mx-auto" src="../assets/teachers.jpg" alt="Generic placeholder image">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">EGRESADOS<span class="text-muted" style="font-size: 34px"></span></h2><!--br>Indicadores sobre egresados</br></span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p-->
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-fluid mx-auto" src="../assets/graduates.jpg" alt="Generic placeholder image">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">REPORTES<span class="text-muted" style="font-size: 34px"></span></h2><!--br>Rankings universitarios</br></span></h2>
          <p class="lead">Los rankings globales principalmente miden el desempeño de de investigación de las universidades.</p-->
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-fluid mx-auto" src="../assets/rankings.png" alt="Generic placeholder image">
        </div>
      </div>

      <hr class="featurette-divider">

      <!-- /END THE FEATURETTES -->


      <!-- FOOTER -->
      <footer>
        <p class="float-right"><a href="#">Regresar al Inicio</a></p>
        <p>Universidad de Carabobo</p>
      </footer>

    </div><!-- /.container -->
    

</div>
 </template>



<style>

.second-title{
  text-shadow: 3px 3px 6px #000000;
}

.home-title{
    font-size: 50px;
    font-weight: bold;
    text-shadow: 3px 3px 6px #000000;
    color: black;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
}

a {
    color: gray;
    font-weight: bold;
    font-size: 16px;
}

a:hover{
    color: #a6a6a6;
}

.back-home{
    color: black;
    
}
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  /* padding-bottom: 3rem; */
  color: #5a5a5a;
}

.bg-inverse {
  background-color: #292b2c !important;
}
/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  z-index: 10;
  bottom: 3rem;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
  background-color: #777;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: normal;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>

<script>
</script>