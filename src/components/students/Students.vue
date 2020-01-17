<template>
<div  id="funcion"  class="container-fluid marge">
    

  <div v-if="this.user.username=='vicerrector' || this.user.username=='Admin'" class="row ">
    <div class="col" > 
                    <blockquote>
                      
                    </blockquote>
        <div class="nav nav-item nav-pills text-center " @click="limpiar();"  role="tablist" aria-orientation="vertical">
          <a class="nav-link active" id="v-pills-home-tab"  @click="limpiar();" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" >CARGA DE ARCHIVO</a>
          <a class="nav-link" id="v-pills-profile-tab"  @click="limpiar();" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">FECHAS TOPES</a>
        </div>     
                    <blockquote>
                      
                    </blockquote>               
    </div>

    <div class="col-11">
      <div class="tab-content " id="v-pills-tabContent">
        <div class="tab-pane fade show active "  id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" >

              <div class="row">         
                <div class="col-sm-4">
                  <nav class="navbar navbar-default selec ">
                          <div class="container-fluid btn-group-vertical ">
                              <div class="navbar-header ">
                                <h5>RANKING</h5>
                              
                              </div>

                              <div class="btn-group-vertical btn-group-toggle  " id="prueb">


                                <div class="form-check selec ">
                                  <input type="radio" class="custom-control-input " id="Pre-grado" value="0"  v-on:change="cambia_titulo(0);" v-model= "pre_post" name="groupOfMaterialRadios"  checked>
                                  <label class="custom-control-label"  for="Pre-grado"><br>PREGRADO</label>
                                </div>


                                <div class="form-check selec ">
                                  <input type="radio" class="custom-control-input "  id="Post-grado" value="1"  v-on:change="cambia_titulo(1);" v-model= "pre_post" name="groupOfMaterialRadios" >
                                  <label class="custom-control-label"  for="Post-grado"><br>POSTGRADO</label>
                                </div>

                              </div>

                          </div>


                  </nav>
                   <blockquote>
                      
                  </blockquote>
                            
                </div>
                
                <div class="col-sm-8">
                    <blockquote>
                      <header>
                        <br>
                        <h2 id="titulo" class="text-center menu ">DIRECCION ESTUDIANTIL DE PREGRADO</h2>
                      </header>
                    </blockquote>
                          <div class="container">
                            <ul class="" id="resul">	             
                            </ul>
                            <div id="columna_principal" class="large-12 medium-12 small-12 cell">
                                <div id= "alert" class="alert alert-secondary" role="alert">
                                  <h6 id= "i" >Selecione un archivo</h6>
                                </div>
                                   
                            </div>
                            <div class="archivo normal rounded" >
                                  <input type="file" id="file" ref="file" v-on:change="handleFileUpload();">                     
                                  <button class="btn btn-light" id="enviar" @click="submitFile({pre_post})" >Enviar</button> 
                            </div>
                          </div>

                    
                </div>                

              </div>

        </div>
        <div class="tab-pane fade " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" :load="cargar_fecha()"  >
                <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
                <br>
                <div class="col s12 "  >
                    <h5>FECHAS TOPES PARA DIRECCION ESTUDIANTIL DE PREGRADO</h5>               
                    <div class="form-group row">
                      <label for="first_name"  class="col-sm-4 col-form-label text-md-right">Faces</label>
                      <div class="col-md-3">
                        <input type="date"  id="faces" value="2018-01-01" class="form-control" >
                      </div>
                        <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="faces3" disabled=true value="2018-01-01" class="form-control" >
                      </div>
                    </div>                 
                    <div class="form-group row">
                      <label for="first_name"  class="col-sm-4 col-form-label text-md-right">Facyt</label>
                      <div class="col-md-3">
                        <input type="date"  id="facyt" value="2018-01-01" class="form-control"   >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="facyt3" disabled=true value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Faces</label>
                      <div class="col-md-3">
                        <input type="date"  id="face" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="face3" disabled=true value="2018-01-01" class="form-control" >
                      </div>
                    </div>                
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fcjp</label>
                      <div class="col-md-3">
                        <input type="date"  id="fcjp" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="fcjp3" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>                
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Odontologia</label>
                      <div class="col-md-3">
                        <input type="date"  id="odontologia" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="odontologia3" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Ingieneria</label>
                      <div class="col-md-3">
                        <input type="date"  id="ingenieria" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="ingenieria3" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fcs</label>
                      <div class="col-md-3">
                        <input type="date" id="fcs" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="fcs3" disabled=true value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                  
                </div>
                
                <div class="col s12 "  >
                    <br><h5>FECHAS TOPES PARA DIRECCION ESTUDIANTIL DE POSTGRADO</h5>
                    <div class="form-group row">
                      <label for="first_name"  class="col-sm-4 col-form-label text-md-right">Faces</label>
                      <div class="col-md-3">
                        <input type="date"  id="faces2" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="faces4" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>
                    <div class="form-group row">
                      <label for="first_name"  class="col-sm-4 col-form-label text-md-right">Facyt</label>
                      <div class="col-md-3">
                        <input type="date"  id="facyt2" value="2018-01-01" class="form-control"   >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="facyt4" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Faces</label>
                      <div class="col-md-3">
                        <input type="date"  id="face2" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="face4" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>                 
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fcjp</label>
                      <div class="col-md-3">
                        <input type="date"  id="fcjp2" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="fcjp4" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>                  
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Odontologia</label>
                      <div class="col-md-3">
                        <input type="date"  id="odontologia2" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="odontologia4" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Ingieneria</label>
                      <div class="col-md-3">
                        <input type="date"  id="ingenieria2" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="ingenieria4" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">subida Fcs</label>
                      <div class="col-md-3">
                        <input type="date" id="fcs2" value="2018-01-01" class="form-control" >
                      </div>
                      <label for="first_name"  class="col col-form-label text-md-right">Ultimos cambios</label>
                      <div class="col-md-3">
                        <input type="date"  id="fcs4" disabled=true value="2018-01-01" class="form-control" >
                      </div>

                    </div>
                    <ul class="" id="resul2">	  
                    </ul>
                    <div class="form-group" id="boton">                       
                        <button @click="guardarfechas()" class=" btn btn-primary" >Guardar</button>
                    </div>
                </div>

        </div>

      </div>
    </div>
  </div>
  
  <div v-else>
              <blockquote style="margin-top: 6%;">
                            <header>
                              <br>
                              <h2 id="titulo" class="text-center menu ">DIRECCION ESTUDIANTIL DE PREGRADO</h2>
                            </header>
              </blockquote>
              <div class="row">         
                <div class="col-sm-2">
                  <nav class="navbar navbar-default selec ">
                          <div class="container-fluid btn-group-vertical ">
                              <div class="navbar-header ">
                                <h5>RANKING</h5>                       
                              </div>

                              <div class="btn-group-vertical btn-group-toggle  " id="prueb">
                                <div class="form-check selec ">
                                  <input type="radio" class="custom-control-input " id="Pre-grado" value="0"  v-on:change="cambia_titulo(0);" v-model= "pre_post" name="groupOfMaterialRadios"  checked>
                                  <label class="custom-control-label"  for="Pre-grado"><br>PREGRADO</label>
                                </div>
                                <div class="form-check selec ">
                                  <input type="radio" class="custom-control-input "  id="Post-grado" value="1"  v-on:change="cambia_titulo(1);" v-model= "pre_post" name="groupOfMaterialRadios" >
                                  <label class="custom-control-label"  for="Post-grado"><br>POSTGRADO</label>
                                </div>
                              </div>

                          </div>
                  </nav>
                </div>               
                <div class="col-sm-6">                          
                      <div class="container">
                            <ul class="" id="resul">	                     
                            </ul>
                            <div id="columna_principal" class="large-12 medium-12 small-12 cell">
                                  <div id= "alert" class="alert alert-secondary" role="alert">
                                     <h6 id= "i" >Selecione un archivo</h6>
                                  </div>
                            </div>
                            <div class="archivo normal rounded" >
                                  <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                                  <button class="btn btn-light" id="enviar" @click="submitFile({pre_post})" >Enviar</button>                              
                            </div>

                      </div>                    
                </div>               
                <div class="col-md-4"  >               
                   <div class="form-group row">
                      <label for="first_name"  class=" col-form-label text-md-right">Fecha tope de subida:</label>
                      <input type="date"  id="fecha_tope" disabled=true  value="2018-01-01" class="form-control"   >
                      <label for="first_name"  class=" col-form-label text-md-right">Ultimos cambios:</label>
                      <input type="date"  id="fecha_tope2" disabled=true value="2018-01-01" class="form-control" >
                    </div>        
                </div>
              </div>

  </div>

</div>

</template>

<script>                       


import Vue from 'vue';
import axios from 'axios';
import jsPDF from "jsPDF";
import {mapState,mapGetters} from "vuex"
import { URL_STUDENTS } from '@/common/constants'


export default{
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
        pre_post: '0',
        fecha: '2018-10-29',
        
      }
    },

methods: {

// Funcion para limpiar el elemento con ID "result2"
limpiar: function(){
  if(document.getElementById('resul2')){

           document.getElementById('resul2').innerHTML = "";
           };

},

// Funcion para hacer la solicitud al Backend de guardar las fechas
guardarfechas: function(){
          let formData = new FormData();
         var facyt_pregrado=   document.getElementById("facyt").value;
         var faces_pregrado=   document.getElementById("faces").value;
         var face_pregrado=   document.getElementById("face").value;
         var fcjp_pregrado=   document.getElementById("fcjp").value;
         var ingenieria_pregrado=   document.getElementById("ingenieria").value;
         var fcs_pregrado=   document.getElementById("fcs").value;
         var odontologia_pregrado=   document.getElementById("odontologia").value;
        
         var facyt_postgrado=   document.getElementById("facyt2").value;
         var faces_postgrado=   document.getElementById("faces2").value;
         var face_postgrado=   document.getElementById("face2").value;
         var fcjp_postgrado=   document.getElementById("fcjp2").value;
         var ingenieria_postgrado=   document.getElementById("ingenieria2").value;
         var fcs_postgrado=   document.getElementById("fcs2").value;
         var odontologia_postgrado=   document.getElementById("odontologia2").value;  

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
                              var li=document.createElement('LI');
                    li.innerHTML="<h6 id= 'i'>Se han guardado los cambios</h6>";
                    li.setAttribute('class','alert text-center alert-success');
                    document.getElementById('resul2').appendChild(li);
            }
          console.log('SUCCESS!!');

        })
        .catch(res=> {
         console.log(res);
          var li=document.createElement('LI');
                    li.innerHTML="<h6 id= 'i'>'"+res+"'</h6>";
                    li.setAttribute('class','alert text-center alert-danger');
                    document.getElementById('resul2').appendChild(li);

          console.log('FAILURE!!');
        });
        
},
   
// Funcion para obtener la fecha asociada a una facultad en particular   
mymethod(){
  
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

// Funcion para hacer la solicitud de verificacion del archivo csv en particular
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
            if(pre_post.pre_post==0){
              
                        path = URL_STUDENTS + '/upload/11/'+ this.user.username;
                          // path = 'http://localhost:8082/api/v1/estudiantes';
                    
            }else{
              
                     path = URL_STUDENTS +'/upload/21/'+ this.user.username;   
            }
            axios.post(path,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
              }
            ).then(function(res){
              

              if(!(res.data['exitosa']=="error")){
                    
                   if(document.getElementById("resul")){
                     document.getElementById("resul").innerHTML = "";
                   }

                  var lMargin=15; //left margin in mm
                  var rMargin=15; //right margin in mm
                  var pdfInMM=210;  // width of A4 in mm
                  var doc = new jsPDF("p","mm","a4");
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
                  

                     if(res.data["exitosa"].length>0){
                        if(document.getElementById("alert")){
                          document.getElementById("alert").remove();
                         document.getElementById("columna_principal").innerHTML =  " <div id='alert' class='alert text-center alert-danger col-lg-11' role='alert'><h6 id= 'i'>Error al cargar el archivo. Revice el archivo 'Error(s).pdf'</h6> </div>  ";
                         doc.save('Error(s).pdf'); 
                        }

                    }else{
                           if(document.getElementById("alert")!=null){
                            var div = document.getElementById("alert");
                            div.setAttribute('class','alert text-center alert-success');
                            div.textContent= "Se han guardado los cambios";
                             
                           }else{
                    
                            document.getElementById("columna_principal").innerHTML = " <div id='alert' class='alert text-center alert-success col-lg-11' role='alert'><h6 id= 'i'>Se han guardado los cambios</h6> </div>  ";
                            document.getElementById("resul").innerHTML = "";
                            
                          }
                      
                    }

              }else{
                
                     if(document.getElementById("alert")!=null){
                          var div = document.getElementById("alert");
                          div.setAttribute('class','alert text-center alert-danger');
                          div.textContent= "Error al cargar el archivo";
                    }else{
                   
                           document.getElementById("columna_principal").innerHTML =  " <div id='alert' class='alert text-center alert-danger col-lg-11' role='alert'><h6 id= 'i'>Error al cargar el archivo</h6> </div>  ";
                          
                          document.getElementById("resul").innerHTML = "";
                    }
              }
          
          console.log('SUCCESS!!');
        })
        .catch(res=> {
         console.log(res);
          console.log('FAILURE!!');
        });

},

// Funcion para cambiar los bordes de la seleccion del archivo a cargar. 
handleFileUpload(){
        this.file = this.$refs.file.files[0];
       
        if(this.$refs.file.files[0].name){
          if(document.getElementById("alert")){
                  var div = document.getElementById("alert");
                    div.setAttribute('class','alert text-center alert-success');
                    div.textContent= "Archivo: " + this.$refs.file.files[0].name ;
            }

        }
        
},

// Funcion para realizar la solicitud al backend de todas las fechas topes. 
cargar_fecha: function(){

         console.log("entrooo carga fecha");
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

                  document.getElementById("facyt").setAttribute('value',res.data[0][0].substring(0, 10));
                  document.getElementById("facyt3").setAttribute('value',res.data[0][2].substring(0, 10));

                  document.getElementById("fcjp").setAttribute('value',res.data[1][0].substring(0, 10));
                  document.getElementById("fcjp3").setAttribute('value',res.data[1][2].substring(0, 10));

                  document.getElementById("odontologia").setAttribute('value',res.data[2][0].substring(0, 10));
                  document.getElementById("odontologia3").setAttribute('value',res.data[2][2].substring(0, 10));

                  document.getElementById("ingenieria").setAttribute('value',res.data[3][0].substring(0, 10));
                  document.getElementById("ingenieria3").setAttribute('value',res.data[3][2].substring(0, 10));

                  document.getElementById("fcs").setAttribute('value',res.data[4][0].substring(0, 10));
                  document.getElementById("fcs3").setAttribute('value',res.data[4][2].substring(0, 10));
                  
                  document.getElementById("face").setAttribute('value',res.data[5][0].substring(0, 10));
                  document.getElementById("face3").setAttribute('value',res.data[5][2].substring(0, 10));

                  document.getElementById("faces").setAttribute('value',res.data[6][0].substring(0, 10));
                  document.getElementById("faces3").setAttribute('value',res.data[6][2].substring(0, 10));
                  


                  document.getElementById("facyt2").setAttribute('value',res.data[7][0][0].substring(0, 10));
                  document.getElementById("facyt4").setAttribute('value',res.data[7][0][2].substring(0, 10));

                  document.getElementById("fcjp2").setAttribute('value',res.data[7][1][0].substring(0, 10));
                  document.getElementById("fcjp4").setAttribute('value',res.data[7][1][2].substring(0, 10));

                  document.getElementById("odontologia2").setAttribute('value',res.data[7][2][0].substring(0, 10));
                  document.getElementById("odontologia4").setAttribute('value',res.data[7][2][2].substring(0, 10));

                  document.getElementById("ingenieria2").setAttribute('value',res.data[7][3][0].substring(0, 10));
                  document.getElementById("ingenieria4").setAttribute('value',res.data[7][3][2].substring(0, 10));

                  document.getElementById("fcs2").setAttribute('value',res.data[7][4][0].substring(0, 10));
                  document.getElementById("fcs4").setAttribute('value',res.data[7][4][2].substring(0, 10));

                  document.getElementById("face2").setAttribute('value',res.data[7][5][0].substring(0, 10));
                  document.getElementById("face4").setAttribute('value',res.data[7][5][2].substring(0, 10));

                  document.getElementById("faces2").setAttribute('value',res.data[7][6][0].substring(0, 10));
                  document.getElementById("faces4").setAttribute('value',res.data[7][6][2].substring(0, 10));
              
          console.log('SUCCESS!!');
        })
        .catch(res=> {
         console.log(res);
          console.log('FAILURE!!');
        });
        
},

// Funcion para cambiar el nombre del titulo, una vez cambiado el check de la facultad
cambia_titulo(instancia){
        if(instancia==0){
          document.getElementById("titulo").innerHTML = "DIRECCION DE ASUNTOS ESTUDIANTIL PARA PREGRADO";
         
        }else{
          document.getElementById("titulo").innerHTML = "DIRECCION DE ASUNTOS ESTUDIANTIL PARA POSTGRADO";
        
        }
        if(!(this.user.username=='vicerrector')){
            
        this.mymethod();
        }

}, 

},

computed:{
         ...mapGetters(["user"])
}

}

</script>

 <style>
 
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
      #fecha{
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
      margin-bottom:40px;
      text-align: center;
      opacity :0.5;
        }
      h5{
      margin-bottom:15px;
      text-align: center;
      opacity :0.7;
        }
        #enviar {
       
          width:150px;
        }
        #submenu {
       
         margin-top:10px;
        margin-bottom:10px;
        }

        .marge {
       
         margin-top:8%;
       
        }
@media (max-width: 1000px) { 


   .intru {
          
           padding: 0px 0px;
           
        }


 }
 @media (max-width: 768px) { 

   .intru {
          
          display:none;
          /* margin-top: 20%; */
        }
 }

  @media (max-width: 1000px) { 

     #enviar {
          margin-top:10px;
          width:100%;
        }

  
 }
  .margen{
          
         
          margin-top:5%;
          margin-bottom:8%;
        }
  #boton{
            display:bloack;
          
          width: 180px;
          margin:auto;
       
        }
  

.vice{
  margin-top: 5%;
}
/* navbar */
.navbar-default {
    background-color: #F8F8F8;
    border-color: #E7E7E7;
}
/* Title */
.navbar-default .navbar-brand {
    color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
    color: #5E5E5E;
}
/* Link */
.navbar-default .navbar-nav > li > a {
    color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
    color: #333;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
    color: #555;
    background-color: #E7E7E7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
    color: #555;
    background-color: #D5D5D5;
}
/* Caret */
.navbar-default .navbar-nav > .dropdown > a .caret {
    border-top-color: #777;
    border-bottom-color: #777;
}
.navbar-default .navbar-nav > .dropdown > a:hover .caret,
.navbar-default .navbar-nav > .dropdown > a:focus .caret {
    border-top-color: #333;
    border-bottom-color: #333;
}
.navbar-default .navbar-nav > .open > a .caret,
.navbar-default .navbar-nav > .open > a:hover .caret,
.navbar-default .navbar-nav > .open > a:focus .caret {
    border-top-color: #555;
    border-bottom-color: #555;
}
/* Mobile version */
.navbar-default .navbar-toggle {
    border-color: #DDD;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
    background-color: #DDD;
}
.navbar-default .navbar-toggle .icon-bar {
    background-color: #CCC;
}
@media (max-width: 767px) {
    .navbar-default .navbar-nav .open .dropdown-menu > li > a {
        color: #777;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
          color: #333;
    }
}


.selec{
  line-height: 100%;
} 

.fondo{
   background: #EBEDEF;  
}
.color{
  background: #2C3E50;
}
.fondo2{  
    text-align:center;
    display: table-cell;
}
.btn { 
  display: block;   
  margin-left: auto;   
  margin-right: auto; 
  }
 
  .col-lg-2 { line-height: 100px; }
  .col-lg-5 { line-height: 200px; }
  .col-lg-12 { line-height: 80px; }

  .footer,.copyright{
  text-align: center;
  }

/*--footer--*/
.footer {
	background: #2F292B;
	text-align:center;
	padding:1% 0;
}
.texto-pie-pagina h2{
	color:#fff;
	font-size:3em;
	font-family: 'bebas_neueregular';
	text-transform:uppercase;
	margin-bottom:2%;
}
.texto-pie-pagina p{
	font-size:0.8125em;
	line-height:1.5em;
	color:#989898;
}
  /***** Media Quries *****/
@media only screen and (max-width: 1024px) {
  .envolver{
		width:95%;
  }
  .pie{
   margin-top:2%; 
 }
}
/*  GO FULL WIDTH AT LESS THAN 640 PIXELS */
 @media only screen and (max-width: 640px) and (min-width: 480px) {
   .envolver{
		width:95%;
	}
 }
 /*  GO FULL WIDTH AT LESS THAN 480 PIXELS */
 @media only screen and (max-width: 480px) {
   .envolver{
		width:95%;
	}
 }
 /***** Media Quries *****/
@media only screen and (max-width: 1024px) {
  .envolver{
		width:95%;
	}
}
/*  GO FULL WIDTH AT LESS THAN 640 PIXELS */
@media only screen and (max-width: 640px) and (min-width: 480px) {
  .envolver{
		width:95%;
	}
}
/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */
@media only screen and (max-width: 480px) {
  .envolver{
		width:95%;
	}
}
/***** Media Quries *****/
@media only screen and (max-width: 1024px) {
  .envolver{
		width:95%;
	}
}
/*  GO FULL WIDTH AT LESS THAN 800 PIXELS */
@media only screen and (max-width: 800px) {
  .envolver{
		width:95%;
	}
}
/*  GO FULL WIDTH AT LESS THAN 640 PIXELS */
@media only screen and (max-width: 640px) and (min-width: 480px) {
  .envolver{
		width:95%;
	}
}

/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */
@media only screen and (max-width: 480px) {
  .envolver{
		width:95%;
	}
}
@media (max-width:1366px){
  .envolver{
		width:90%;
	}
}
@media (max-width:1280px){
  .envolver{
		width:90%;
  }
  .pie{
   margin-top:41%; 
 }

}
@media (max-width:1024px){
  .envolver{
		width:90%;
  }
  .pie{
   /* margin-top:4%;  */
 }
}
@media (max-width:800px){
  .envolver{
		width:90%;
  }
  .texto-pie-pagina h2 {
		font-size: 2.5em;
	}  
  

}
@media (max-width:768px){
  .envolver{
		width:90%;
	}
}
@media (max-width:640px){
  .envolver{
		width:90%;
  }
  .texto-pie-pagina h2 {
		font-size: 2.5em;
	}
}
@media (max-width:480px){
  .envolver{
		width:90%;
  }	
  .texto-pie-pagina h2 {
		font-size: 2em;
	}
}
@media (max-width:320px){
  .envolver{
		width:90%;
  }
  .texto-pie-pagina h2 {
		font-size: 2em;
  }
  
}
        </style>
