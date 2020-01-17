<template>

<div class="container margen" >
<div id="fecha" >
    <h2>Fechas límites de cargas de archivos</h2>
      
     <div class="large-12 medium-12 small-12 cell" >
      <div id= "i" class="alert alert-secondary" role="alert">
      </div>
    </div>
    <br><br>
  
    <h4 class="text-md-center">Dirección Estudiantil de Pregrado</h4>
    <br>
  <div class="row">
    

    
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
  
                        <label for="first_name"  class="col col-form-label text-md-center">Faces</label>
                        <div class="col">
                          <input type="date"  id="FACES" value="2018-01-01" class="form-control" >
                        </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Facyt</label>
                          <div class="col">
                            <input type="date"  id="FACYT" value="2018-01-01" class="form-control"   >
                          </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Face</label>
                          <div class="col">
                            <input type="date"  id="FACE" value="2018-01-01" class="form-control" >
                          </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
  
                          <label for="first_name"  class="col col-form-label text-md-center">Fcjp</label>
                          <div class="col">
                            <input type="date"  id="FCJP" value="2018-01-01" class="form-control" >
                          </div>

                      </div>

                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      
                          <label for="first_name"   class="col col-form-label text-md-center">Odontología</label>
                          <div class="col">
                            <input type="date"  id="ODONTOLOGIA" value="2018-01-01" class="form-control" >
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"> 
                          <label for="first_name"  class="col col-form-label text-md-center">Ingeniería</label>
                          <div class="col">
                            <input type="date"  id="INGENIERIA" value="2018-01-01" class="form-control" >
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Fcs</label>
                          <div class="col">
                            <input type="date" id="FCS" value="2018-01-01" class="form-control" >
                          </div>
                       </div>

  </div>


    <br><br>
  
    <h4 class="text-md-center">Dirección Estudiantil de Postgrado</h4>
    <br>
  <div class="row">
    

    
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
  
                        <label for="first_name"  class="col col-form-label text-md-center">Faces</label>
                        <div class="col">
                          <input type="date"  id="FACES3" value="2018-01-01" class="form-control" >
                        </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Facyt</label>
                          <div class="col">
                            <input type="date"  id="FACYT3" value="2018-01-01" class="form-control"   >
                          </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Face</label>
                          <div class="col">
                            <input type="date"  id="FACE3" value="2018-01-01" class="form-control" >
                          </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
  
                          <label for="first_name"  class="col col-form-label text-md-center">Fcjp</label>
                          <div class="col">
                            <input type="date"  id="FCJP3" value="2018-01-01" class="form-control" >
                          </div>

                      </div>

                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      
                          <label for="first_name"   class="col col-form-label text-md-center">Odontología</label>
                          <div class="col">
                            <input type="date"  id="ODONTOLOGIA3" value="2018-01-01" class="form-control" >
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"> 
                          <label for="first_name"  class="col col-form-label text-md-center">Ingeniería</label>
                          <div class="col">
                            <input type="date"  id="INGENIERIA3" value="2018-01-01" class="form-control" >
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <label for="first_name"  class="col col-form-label text-md-center">Fcs</label>
                          <div class="col">
                            <input type="date" id="FCS3" value="2018-01-01" class="form-control" >
                          </div>
                       </div>

  </div>
  <br>
  <div class="form-group text-md-center" id="boton">                       
                        <button @click="guardarfechas()" class=" btn btn-primary" >Guardar</button>
  </div>
  <br>

  </div>

  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Mensaje</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4 id="mensaje" >Se han guardado los cambios...</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Mensaje</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4 id="mensaje" >Error, no se guardaron los cambios...</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
      </div>
    </div>
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
    /*
      Defines the data used by the component
    */
    data(){
      return {
        file: '',
        fecha: '2010-01-01',
        Ultima:'',
      }
    }, mounted(){
     // invocar los métodos
    //  this.cambiar();
    this.cargar_fecha();
    },

    methods: {

   
// Funcion para realizar la solicitud al backend de todas las fechas topes. 
cargar_fecha: function(){

        //  console.log("entrooo carga fecha");
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
                  // console.log(res.data[cont][1]);
                  document.getElementById(res.data[cont][1]).setAttribute('value',res.data[cont][0].substring(0, 10));
                  document.getElementById(res.data[cont][1] + "3").setAttribute('value',res.data[cont][2].substring(0, 10));
                      cont++;
                  }

                 
              
          console.log('SUCCESS!!');
        })
        .catch(res=> {
         console.log(res);
          console.log('FAILURE!!');
        });
        
},

// Funcion para hacer la solicitud al Backend de guardar las fechas
guardarfechas: function(){
          let formData = new FormData();
         var facyt_pregrado=   document.getElementById("FACYT").value;
         var faces_pregrado=   document.getElementById("FACES").value;
         var face_pregrado=   document.getElementById("FACE").value;
         var fcjp_pregrado=   document.getElementById("FCJP").value;
         var ingenieria_pregrado=   document.getElementById("INGENIERIA").value;
         var fcs_pregrado=   document.getElementById("FCS").value;
         var odontologia_pregrado=   document.getElementById("ODONTOLOGIA").value;
        
         var facyt_postgrado=   document.getElementById("FACYT2").value;
         var faces_postgrado=   document.getElementById("FACES2").value;
         var face_postgrado=   document.getElementById("FACE").value;
         var fcjp_postgrado=   document.getElementById("FCJP2").value;
         var ingenieria_postgrado=   document.getElementById("INGENIERIA2").value;
         var fcs_postgrado=   document.getElementById("FCS2").value;
         var odontologia_postgrado=   document.getElementById("ODONTOLOGIA2").value;  

         var path = URL_STUDENTS + '/insertarfecha/' +facyt_pregrado+ '/'+faces_pregrado + '/'+face_pregrado+  '/'+ fcjp_pregrado+ '/'+ ingenieria_pregrado+ '/'+ fcs_pregrado+ '/'+ odontologia_pregrado+ '/' +facyt_postgrado+ '/'+faces_postgrado + '/'+face_postgrado+  '/'+ fcjp_postgrado+ '/'+ ingenieria_postgrado+ '/'+ fcs_postgrado+ '/'+ odontologia_postgrado ;
            
            axios.post(path,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
              }
            ).then(function(res){  
           if(res.data[0]=='exito'){  
             $('#exampleModalCenter').modal('show');
              $( "#i" ).removeClass( "alert alert-secondary" ).addClass( "alert alert-success" );

            }
          console.log('SUCCESS!!');

        })
        .catch(res=> {
           $( "#i" ).removeClass( "alert alert-secondary" ).addClass( "alert alert-danger" );
           $('#exampleModalCenter2').modal('show');
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

.sidebar-sticky{
    margin-top:20px;
}


</style>    

