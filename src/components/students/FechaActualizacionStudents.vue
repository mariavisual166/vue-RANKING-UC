<template>

<div class="container margen" >
  <h2>Fechas de últimas actualizaciones</h2>
  <hr>
    <br>
    <h4 class="text-md-center">Dirección Estudiantil de Pregrado</h4>
    <br>
  <div class="row">
    
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
  
                        <label for="first_name"  class="col col-form-label text-md-center">Faces</label>
                        <div class="col">
                          <input type="date"  id="FACES2" disabled=true value="2018-01-01" class="form-control" >
                        </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Facyt</label>
                          <div class="col">
                            <input type="date"  id="FACYT2" disabled=true value="2018-01-01" class="form-control"   >
                          </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Face</label>
                          <div class="col">
                            <input type="date"  id="FACE2" disabled=true value="2018-01-01" class="form-control" >
                          </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
  
                          <label for="first_name"  class="col col-form-label text-md-center">Fcjp</label>
                          <div class="col">
                            <input type="date"  id="FCJP2" disabled=true value="2018-01-01" class="form-control" >
                          </div>

                      </div>

                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      
                          <label for="first_name"   class="col col-form-label text-md-center">Odontología</label>
                          <div class="col">
                            <input type="date"  id="ODONTOLOGIA2" disabled=true value="2018-01-01" class="form-control" >
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"> 
                          <label for="first_name"  class="col col-form-label text-md-center">Ingeniería</label>
                          <div class="col">
                            <input type="date"  id="INGENIERIA2" disabled=true value="2018-01-01" class="form-control" >
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Fcs</label>
                          <div class="col">
                            <input type="date" id="FCS2" disabled=true value="2018-01-01" class="form-control" >
                          </div>
                       </div>

  </div>

<br><br><br>
  <h4 class="text-md-center">Dirección Estudiantil de Postgrado</h4>
    <br>
  <div class="row">
    

    
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
  
                        <label for="first_name"  class="col col-form-label text-md-center">Faces</label>
                        <div class="col">
                          <input type="date"  id="FACES4" disabled=true value="2018-01-01" class="form-control" >
                        </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Facyt</label>
                          <div class="col">
                            <input type="date"  id="FACYT4" disabled=true value="2018-01-01" class="form-control"   >
                          </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Face</label>
                          <div class="col">
                            <input type="date"  id="FACE4" disabled=true value="2018-01-01" class="form-control" >
                          </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
  
                          <label for="first_name"  class="col col-form-label text-md-center">Fcjp</label>
                          <div class="col">
                            <input type="date"  id="FCJP4" disabled=true value="2018-01-01" class="form-control" >
                          </div>

                      </div>

                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      
                          <label for="first_name"   class="col col-form-label text-md-center">Odontología</label>
                          <div class="col">
                            <input type="date"  id="ODONTOLOGIA4" disabled=true value="2018-01-01" class="form-control" >
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"> 
                          <label for="first_name"  class="col col-form-label text-md-center">Ingeniería</label>
                          <div class="col">
                            <input type="date"  id="INGENIERIA4" disabled=true value="2018-01-01" class="form-control" >
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Fcs</label>
                          <div class="col">
                            <input type="date" id="FCS4" disabled=true value="2018-01-01" class="form-control" >
                          </div>
                       </div>

  </div>


  </div>



</template>

<script>

import { mapState, mapGetters } from "vuex";
import jsPDF from "jsPDF";
import axios from 'axios';
import { URL_STUDENTS } from "@/common/constants"

  export default {

    mounted() {

            this.cargar_fecha();

    },
   





    data(){
      return {
        file: '',
        fecha: '2010-01-01',
        Ultima:'',
      }
    },

    methods: {
     // Funcion para realizar la solicitud al backend de todas las fechas topes. 
cargar_fecha: function(){

   
            let formData = new FormData();

        var path = URL_STUDENTS + '/fechasvicerrector';
            
            axios.post(path,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
              }
            ).then(function(res){
   
               

                   var cont=0;
                  while(cont<7){
                  
                  document.getElementById(res.data[7][cont][1]+ "2").setAttribute('value',res.data[7][cont][0].substring(0, 10));
                  document.getElementById(res.data[7][cont][1] + "4").setAttribute('value',res.data[7][cont][2].substring(0, 10));
                      cont++;
                  }

              
          console.log('SUCCESS!!');
        })
        .catch(res=> {
         console.log(res);
          console.log('FAILURE!!');
        });
        
}


     
    },computed: {
      ...mapGetters(["user"])
    }
  }
</script>

<style type="text/css">
#centar{
          display:block;margin:auto;
           margin-bottom:20px; margin-top:20px;
        }
#centar2{
          display:block;margin:auto;
           margin-bottom:20px; margin-top:-10px;
        }
  .archivo{
          
          background: rgba(155,155,155,0.3);
          padding: 40px 40px 60px 40px ;
          margin:auto;
          margin-top:12%;
          margin-bottom:8%;
        }
    #i{
        margin-top:10px;
         
        }
    .rojo{
         border: 1px solid rgba(255,0,0,0.5);
        }
    .verde{
       background:rgba(0,128,0,0.2);
        }
    .normal{
           border: 1px solid rgba(155,155,155,0.1);
         
        } 
      #fecha,#Ver,#UltimaFecha{
          
         
        }
      .copyright{
          
          
        }
        .intru{
          
             padding: 10px 40px;
           
        }
   .intru h4, .intru p{
          

         text-align: center;
        }
    h2{
      margin-top:10px;
      margin-bottom:20px;
      text-align: center;
      opacity :0.5;
        }
      h5{
      margin-bottom:15px;
      text-align: center;
      opacity :0.0;
        }
        #enviar {
       
          width:150px;
        }
        #submenu {
       
         margin-top:10px;
        margin-bottom:10px;
        }
        #imagen img{
             width:110%;
              margin-left:-90px;
        
        }

        label{
            text-align:center;
           
        }
@media (max-width: 1000px) { 


   .intru {
          
           padding: 0px 0px;
        }


 }
 @media (max-width: 768px) { 


   .intru {
          
          display:none;
        }

 

    


 }

  @media (max-width: 1000px) { 


  
     #enviar {
          margin-top:10px;
          width:100%;
        }

    


 }
  .margen{
          
         
          margin-top:8%;
          margin-bottom:8%;
        }
  #boton{
          display:bloack;
           margin:auto;

       
        }

 
.zoom {
    padding: 50px;
    
    transition: transform .2s; /* Animation */
    width: 200px;
    height: 200px;
   
}

.zoom:hover {
    transform: scale(1.3); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    margin-left:100px;
     margin-bottom:80px;
}

.form-group{
    margin-top:-10px;
}
</style>    

