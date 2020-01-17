<template>


<div class="container margen" >

<div id="carga" >
  <h2>Carga de archivo con información de estudiantes de la UC</h2>
    <div id= "j" class="large-12 medium-12 small-12 cell" >
      <div id= "i" class="alert alert-secondary" role="alert">

      </div>
    </div>

<!-- <label class="btn btn-secundary">Seleccioné el tipo de estudio:   -->
  <h6>Seleccionar el tipo de formación: 
    <label class="btn btn-secondary"> 
        <div class="btn-group-horizontal btn-group  " id="prueb">
                                <div class="form-check selec ">
                                  <input type="radio" class="custom-control-input " id="Pre-grado" value="0"   v-model= "pre_post" name="groupOfMaterialRadios"  checked>
                                  <label class="custom-control-label"  for="Pre-grado">PREGRADO</label>
                                </div>
                                &nbsp;&nbsp;
                                <div class="form-check selec ">
                                  <input type="radio" class="custom-control-input "  id="Post-grado" value="1"  v-model= "pre_post" name="groupOfMaterialRadios" >
                                  <label class="custom-control-label"  for="Post-grado">POSTGRADO</label>
                                </div>
                              </div>

</label>
</h6>

        <div class="row">
          <div class="col-xl-8 col-md-8 col-sm-12">
            <div class="archivo normal rounded" id="archi">
              <h5>Archivo</h5>
              <label>
                <input type="file" id="file" ref="file"   @click="CambiarBoton()" v-on:change="handleFileUpload()"/>
              </label>
              <button class="btn btn-light" id="enviar"  v-on:click="submitFile(pre_post)">Procesar</button>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 col-sm-0">
            <div v-if="!(this.user.name=='vicerrector' || this.user.name=='administrador' )" class="row col">         
                      <div class="form-group row">
                          <label for="first_name"  class=" col-form-label text-md-right">Fecha límite para la carga de archivo:</label>
                          <input type="date"  id="fecha_tope" disabled=true  value="2018-01-01" class="form-control"   >
                          <label for="first_name"  class=" col-form-label text-md-right">Últimos cambios:</label>
                          <input type="date"  id="fecha_tope2" disabled=true value="2018-01-01" class="form-control" >
                        </div> 
                    </div>  

                    <div class="intru">
                      <h4 >Ejemplo de formato</h4>
                      <!-- <p >¿No sabe que archivo cargar?</p> -->
                      <button class="btn btn-light" id="centar" @click="Ver()" >Ver</button>     
                    
                    </div>
             
                          
               
          </div>
        </div>
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
        <h3>El archivo ha sido procesado con éxito...</h3>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
      </div>
    </div>
  </div>
</div>

 <div id="Ver">
    <!-- <h2>Ejemplo</h2> -->
   <h2>Ejemplo de un formato válido para Pregrado:</h2>
   <!-- <label class="btn btn-secundary">Ejemplo de un formato valido para Pregrado:   -->
    <div id="imagen1" ><img src="/static/img/PregradoEstudiante.png" ></div>
     <!-- </label> -->
   <br>
<h2>Ejemplo de un formato válido para Postgrado:</h2>
        <!-- <label class="btn btn-secundary">Ejemplo de un formato valido para Postgrado:   -->
    <div id="imagen2" ><img src="/static/img/PostgradoEstudiante.png" ></div>
     
    <!-- </label> -->

    <button class="btn btn-light" id="centar" @click="Regresar()" >Regresar </button>
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
      
    mounted() {
    if(!(this.user.username=='vicerrector' || this.user.username=='Admin')){       

     this.mymethod();
     }
   

    },
    data(){
      return {
        file: '',
        fecha: '2010-01-01',
        pre_post: '0'
      }
    },

    methods: {
      
    // Enviar el archivo al servidor
      submitFile(pre_post){
        /*
                Initialize the form data
            */
   
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
        var path = '';
            // console.log(this.user.username);
            if(pre_post==0){
              
                        path = URL_STUDENTS + '/upload/11/'+ this.user.username;
                          // path = 'http://localhost:8082/api/v1/estudiantes';
                    
            }else{
              
                     path = URL_STUDENTS + '/upload/21/'+ this.user.username;   
            }
            axios.post(path,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
              }
            ).then(function(res){

                if(!(res.data['exitosa']=="error"))
                {
             
                    $( "#archi" ).removeClass( "rojo" )
                    $( "#archi" ).removeClass( "normal" )
                   
                    $( "#i" ).removeClass( "alert alert-danger" )
                    $( "#i" ).removeClass( "alert alert-secondary" ).addClass( "alert alert-secondary" )
                    // $('#enviar').attr("disabled", true); 

                  var lMargin=15; //left margin in mm
                  var rMargin=15; //right margin in mm
                  var pdfInMM=210;  // width of A4 in mm
                  var doc = new jsPDF("p","mm","a4");
                  //  var doc = new jsPDF("l", "mm", "a4");
                  doc.setFont("helvetica");
                  doc.setFontType("bold");
                  doc.setFontSize(12);
                  doc.setProperties({
                    title: "Lista de errores",
                    subject: "Reporte",
                    author: "UC Ranking",
                    date: new Date()
                  });


                    if(res.data["exitosa"].length>0){

                        $( "#i" ).removeClass( "alert alert-secondary" ).addClass( "alert alert-danger" )
                          var j=1;
                          doc.text(50, 20, 'Error(s) de la carga de datos Estudiantes');
                            for(var i=0;i<res.data["exitosa"].length;i++){
                                  doc.setFontSize(12);
                              var lines =doc.splitTextToSize("- "+res.data["exitosa"][i]+"\n\n", (pdfInMM-lMargin-rMargin));
                                  doc.text(lMargin,30 + (j * 10),lines);
                                    if((j * 10)%240==0 ){
                                        doc.addPage();
                                        j=0;
                                    }
                                    j=j+1;
                            }
                          // doc.addPage();
                        var text= "\n\n\n\n\n\n                                                        SUGERENCIAS\n\n" +
                                  "* Las columnas a_ci, tlf_local, tlf_celular y nro_semestr_anno, solo puede contener valores numéricos" +
                                  "* Las columnas primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, etnia, discapacidad, edo_procedencia, nombre_carrera, estudio_adicional y nacionalidad solo pueden contener contener valores alfabéticos\n\n"+
                                  "* La columna sexo solo puede contener los valores F (Femenino) o M (Masculino)\n\n" +
                                  "* La columna correo solo debe contener valores con el formato @example.com o @uc.edu.ve\n\n" +
                                  "* La columna nombre_carrera solo puede contener los valores de Faces, Facyt, Face, Fcs, Odontologia, Fcjp y Ingenieria\n\n" +
                                  "* La columna estudio_adicional solo puede contener los valores de CURSO, DIPLOMADO y TALLER\n\n"+
                                  "* La columna anno_entrada solo puede contener una año mayor a 1800\n\n"+
                                  "* La columna fecha_nacimiento solo puede contener un formato dd/mm/aaaa\n\n"
                        var lines =doc.splitTextToSize(text, (pdfInMM-lMargin-rMargin));
                                  doc.text(lMargin,30 + (j * 10),lines);                        

                        doc.save("LISTA_ERRORES" + ".pdf");

                                if(document.getElementById("j")){
                                  
                            document.getElementById("j").innerHTML = "<div id= 'i' class='alert alert-secondary' role='alert'>"+

                                                                      "<h6>Error a procesar el archivo. Por favor revise el pdf LISTA_ERRORES para conocer los errores del archivo ingresado al sistema</h6>"+
                                                                      "</div>";
                                                                      document.getElementById("i").setAttribute("class","alert alert-danger");
                               } 

                    }else{                         
                       
                         $('#exampleModalCenter').modal('show');

                        document.getElementById("j").innerHTML = "<div id= 'i' class='alert alert-secondary' role='alert'>"+
                                                                  "</div>";
                        document.getElementById("i").setAttribute("class","alert alert-success");

                    }


                }else{
                    $( "#i" ).removeClass( "alert alert-secondary" ).addClass( "alert alert-danger" );
                    

                     if(document.getElementById("j")){
                     document.getElementById("j").innerHTML = "<div id= 'i' class='alert alert-secondary' role='alert'>"+

                                                              "<h4>Error a procesar el archivo. Por favor revise el pdf LISTA_ERRORES para conocer los errores del archivo ingresado al sistema</h4>"+
                                                              "</div>";
                   } 

      
                }



          console.log('SUCCESS!!');
        })
        .catch(res=> {
        console.log(res);
        console.log('FAILURE!!');
        });
      }, 
      
      // Funcion para obtener la fecha asociada a una facultad en particular   
      mymethod(){
        // console.log("user"+this.user);
          let formData2 = new FormData();
          var path2 = ''
          if(this.pre_post==0){
                      
            path2 = URL_STUDENTS + '/fecha_tope/11/'+ this.user.username;
                            
          }else{
                      
            path2 = URL_STUDENTS + '/fecha_tope/21/'+ this.user.username;   
          }

            axios.post(path2,
                        formData2,
                        {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                        
                      }
                    ).then(function(res){

                      document.getElementById("fecha_tope").setAttribute('value',res.data[0].substring(2, 12));
                      document.getElementById("fecha_tope2").setAttribute('value',res.data[0].substring(25, 35));
                      
                console.log('SUCCESS!!');
                })
                .catch(res=> {
                console.log(res);
                  console.log('FAILURE!!');
                });



      },

      Ver() {
      $("#submenu").css("display", "none");
      $("#fecha").css("display", "none");
      $("#carga").css("display", "none");
      $("#Ver").css("display", "block");
  
      },
     
      Regresar()
      {
      $("#submenu").css("display", "block");
      $("#Ver").css("display", "none");
      $("#UltimaFecha").css("display", "none");
      $("#carga").css("display", "block");
      }, 
      
      
      CambiarBoton(){
          
          $( "#enviar" ).removeClass( "btn btn-light" ).addClass( "btn btn-primary" )

      },
      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    },
    
    computed: {
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
      #Ver{
           
         display:none;
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