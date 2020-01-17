
<template>


<div class="container text-center">
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

  <div class="row align-items-center">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="service-heading-block">          
       
      </div>
    </div>

    <div class="row align-self-center">

    <div class="col-lg-4 col-md-4 col-sm-4">
      <div class="text-center feature-block">
        <span class="fb-icon color-students">
          <i class="fa fa-chart-bar" aria-hidden="true"></i>        
        </span>
      
        <h4 class="color-students">Estudiantes</h4>
        <p class="">Indicadores sobre estudiantes de la Universidad de Carabobo</p>
        <router-link to="/report/ProportionOfStudentsPerFaculty" class="btn btn-students btn-custom"><a>Ver</a></router-link>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="text-center feature-block">
          <span class="fb-icon color-teachers">
            <i class="fa fa-chart-pie" aria-hidden="true"></i>
          </span>
          <h4 class="color-teachers">Docentes</h4>
          <p class="">Indicadores sobre docentes de la Universidad de Carabobo</p>
          <router-link to="/report/CitationsPerFaculty" class="btn btn-teachers btn-custom"><a>Ver</a></router-link>
        </div>
      </div>


    <div class="col-lg-4 col-md-4 col-sm-4">
      <div class="text-center feature-block">
        <span class="fb-icon color-graduates">
          <i class="fa fa-chart-area" aria-hidden="true"></i>
        </span>
        <h4 class="color-graduates">Egresados</h4>
        <p class="">Indicadores sobre egresados de la Universidad de Carabobo</p>
        <router-link to="/report/GraduatesPerFaculty" class="btn btn-graduates btn-custom"><a>Ver</a></router-link>
      </div>
    </div>
  </div>
    
</div>
</div>
    
</template>


<style>

</style>

<script>
export default {};
</script>

