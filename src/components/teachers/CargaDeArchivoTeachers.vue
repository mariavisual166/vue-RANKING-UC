<template>


<div class="container margen" >

<div id="carga" >
  <h2>Carga de archivos con información de los docentes de la UC</h2>
    <div class="large-12 medium-12 small-12 cell" >
      <div id= "i" class="alert alert-secondary" role="alert">
      </div>
    </div>
        
        <div class="row">
          <div class="col-xl-8 col-md-8 col-sm-12">
            <div class="archivo normal rounded" id="archi">
              <h5>Archivo</h5>
              <label>
                <input type="file" id="file" ref="file"   @click="CambiarBoton()" v-on:change="handleFileUpload()"/>
              </label>
              <button class="btn btn-light" id="enviar"  v-on:click="submitFile()">Procesar</button>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 col-sm-0">
            <div v-if="!(this.user.name=='vicerrector' || this.user.name=='administrador' )" class="row col">
                <div class="form-group row">
                 <label for="first_name"  class=" col-form-label text-md-right">Fecha límite para la carga de archivo:</label>
                          <input type="text"  id="" disabled=true  value="2019/10/11" class="form-control"   > 
                <p >Última fecha de actualización</p>
              <input type="text" id="fechaUltimaA" value="2019-01-24" disabled class="form-control" >
            
                </div>
             </div>

            <div class="intru">
              <h4 >Ejemplo de formato</h4>
             
              <button class="btn btn-light" id="centar" @click="Ver()" >Ver </button>     
             
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
        El archivo ha sido procesado con exito..
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
      </div>
    </div>
  </div>
</div>

 <div id="Ver">
    <h2>Ejemplo de un formato válido</h2>
    <div id="imagen"><img src="/static/img/ejemploTeachers.png" ></div>
     <button class="btn btn-light" id="centar" @click="Regresar()" >Regresar </button>

  </div>
</div>


</template>

<script>

import { mapState, mapGetters } from "vuex";
import jsPDF from "jsPDF";
import axios from 'axios';
import { URL_TEACHERS } from "@/common/constants"



export default {
  /*
  Defines the data used by the component
  */

  mounted(){
    // invocar los métodos
    console.log("username: "+this.user.username);
    this.ultimaDeActu();
   
   
  },

  data(){
    return {
      file: '',
      fecha: '2010-01-01',
      Ultima:'',
    }
  },

  methods: {
    /*
    Submits the file to the server
    */
    submitFile2()
    {
      var Facesfecha=$(fechaFaces).val()
      var Facytfecha=$(fechaFacyt).val()
      var Facefecha=$(fechaFace).val()
      var Derechofecha=$(fechaDerecho).val()
      var Odontologiafecha=$(fechaOdontologia).val()
      var Fcjpfecha=$(fechaFcjp).val()
      var Ingieneriafecha=$(fechaIngieneria).val()
      let formData = new FormData();
      const path = URL_TEACHERS +'/fechas/' +Facesfecha+ '/' +Facytfecha+ '/' +Facefecha+'/'+Odontologiafecha+'/'+Fcjpfecha+'/'+Ingieneriafecha +'/'+Derechofecha;

      axios.post(path,
        formData,
        {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
        
      }
      ).then(function(res){

      var con = document.getElementById("e");
      con.textContent  = res.data["exitosa"];


      $( "#e" ).addClass( "verde" )
      console.log(res.data); 
      console.log('SUCCESS!!');



      })
    .catch(res=> {
    console.log(res);
    console.log('FAILURE!!');
    });


  },ConsultarFechaTopeUsuario()
      {
       
          
          let formData = new FormData();
           const path = URL_TEACHERS + '/ConsultarFechaTopeE' ;
        
             axios.post(path,
                  formData,
                  {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
                  
                }
              ).then(function(res){
            
          

              $(fechaTopeUsuario).val(res.data["Facyt"])
              if(this.user.username=='Face_docente')
              {
                    $(fechaTopeUsuario).val(res.data["Face"])
              }else{
                  if(this.user.username=='Faces_docente')
                  {
                          $(fechaTopeUsuario).val(res.data["Faces"])
                  }
                  else{
                    if(this.user.username=='Fcs_docente')
                    {
                            $(fechaTopeUsuario).val(res.data["Fcs"])
                    } else{
                      if(this.user.username=='Fcjp_docente')
                      {
                              $(fechaTopeUsuario).val(res.data["Fcjp"])
                      }
                      else{
                        if(this.user.username=='Fcjp_docente')
                        {
                                $(fechaTopeUsuario).val(res.data["Fcjp"])
                        }
                      }
                    }
                  }


              }



           
           
            console.log('SUCCESS!!');
           
          })
          .catch(res=> {
          console.log(res);
          console.log('FAILURE!!');
          });


      },
  ultimaDeActu(){


    // let formData = new FormData();
    const path = URL_TEACHERS + '/ultimaFecha' ;

    axios.get(path)
      .then(request => {

        if(request.data["Facyt"].split('-')){
          
        }
console.log(request.data["Facyt"].split('-'));

            if(this.user.username=='Facyt_docente'){
             
                   $(fechaUltimaA).val(request.data["Facyt"]);
            }else{

                if(this.user.username=='Face_docente')
              {
                    $(fechaUltimaA).val(request.data["Face"]);
                }else{
                    if(this.user.username=='Faces_docente')
                    {
                          $(fechaUltimaA).val(request.data["Faces"]);
                    }else{
                        if(this.user.username=='Fcs_docente')
                        {
                            $(fechaUltimaA).val(request.data["Fcs"]);
                        }else{
                            if(this.user.username=='Fcjp_docente')
                          {
                                $(fechaUltimaA).val(request.data["Fcjp"]);
                          }else{
                                    if(this.user.username=='Fcjp_docente')
                                    {
                                            $(fechaUltimaA).val(request.data["Fcjp"]);
                                    }
                          }
                        }
                    }
                }
            }



    // $(fechaAFaces).val(request.data["Faces"])
    // $(fechaAFacyt).val(request.data["Facyt"])
    // $(fechaAFace).val(request.data["Face"])
    // $(fechaADerecho).val(request.data["Fcs"])
    // $(fechaAOdontologia).val(request.data["Odontologia"])
    // $(fechaAFcjp).val(request.data["Fcjp"])
    // $(fechaAIngieneria).val(request.data["Ingieneria"])
    // $(API).val(request.data["APi"])   
      // console.log(request.data); 
      console.log('SUCCESS!!');

      })
      .catch(() =>{
        console.log('FALLO!!')
      });


  },
  submitFile(){
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
          
    const path = URL_TEACHERS +'/upload/'+this.user.username;


    axios.post(path,
      formData,
      {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
      
    }
    ).then(function(res){
    var div = document.getElementById("i");
    var i=res.data["Erros"].length;
    div.textContent  = res.data["Erros"][i-1]["exitosa"];

    if(res.data["Erros"][i-1]["exitosa"]== "El Archivo csv ha sido procesado con exito!!!"){
      div.textContent  = "";
    $( "#archi" ).removeClass( "rojo" )
    $( "#archi" ).removeClass( "normal" )
    $('#exampleModalCenter').modal('show');
    $( "#i" ).removeClass( "alert alert-danger" )
    $( "#i" ).removeClass( "alert alert-secondary" ).addClass( "alert alert-secondary" )
    $('#enviar').attr("disabled", true); 
    }else
    {
    $( "#i" ).removeClass( "alert alert-secondary" ).addClass( "alert alert-danger" )

    }
    if(res.data["Erros"][i-1]["exitosa"]== "Error a procesar el archivo. Por favor revise el pdf LISTA_ERRORES para conocer los errores del archivo ingresado al sistema")
    {
    var doc = new jsPDF("l", "mm", "a4");
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(12);
    doc.setProperties({
      title: "Lista de errores",
      subject: "Reporte",
      author: "UC Ranking",
      date: new Date()
    });
    let y = 30
    let index = 0
    doc.text(140, 20, "Lista de errores");
    res.data["Erros"].forEach(() => {
      if(index !==  res.data["Erros"].length - 1) {
        doc.text(20, y, res.data["Erros"][index]["error"]);
        y += 10
        index += 1
      }
    })

    doc.addPage();
    doc.text(140, 20, "Sugerencias");
    doc.text(20, 40, "La columna Cedula solo puede contener valores numericos");
    doc.text(20, 50, "Las columnas primer_nombre,segundo_nombre,primer_apellido,area de invetigacion, titulo, y segundo_apellido   solo puede  ");
    doc.text(20, 60, "contener valores Alfabeticos");
    doc.text(20, 70, "La columna sexo solo puede contener los valores F (Femenino) o M (Masculino)");
    doc.text(20, 80, "La columna correo solo debe vontener valores con el formato @example.com o @uc.edu.ve");

    doc.text(20, 90, "La columna nacionalidad solo puede contener los valores V (Venezolano) o E (Extranjero)");
    doc.text(20, 100, "La columna tipo solo puede contener los valores Normal, Contratado o Investigador");
    doc.text(20, 110, "La columna area de invetigacion solo puede contener los valores Normal, Contratado o Investigador");
    doc.text(20, 120, "La columna tipo solo puede contener los valores Normal, Contratado o Investigador");
    doc.text(20, 130,"La columna Nivel solo puede contener los valores Pregrado, Postgrado, Maestia, Doctodado");
    doc.text(20, 140,"La columna escalafon solo puede contener los valores Instructor ,Asistente, Agregado,Asociado,Titular");
    doc.text(20, 150,"La columna escalafon solo puede contener los valores Faces, Facyt, Face, Fcs, Odontologia,Fcjp y Ingieneria");
      //Info for verification

    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(16);


    doc.save("LISTA_ERRORES" + ".pdf");

    $( "#enviar" ).removeClass( "btn btn-primaryt" ).addClass( "btn btn-light" )

    }


    console.log(res.data["Erros"][i-1]["exitosa"]); 
    console.log('SUCCESS!!');
    })
    .catch(res=> {
    console.log(res);
    console.log('FAILURE!!');
    });
  }, 
  cambiar(){
    $( "#FechasA" ).removeClass( "active" )
    $( "#LinkArchivo" ).removeClass( "active" )
    $( "#LinkFecha" ).addClass( "active" )
    $("#carga").css("display", "none");
    $("#UltimaFecha").css("display", "none");
    $("#fecha").css("display", "block");

  },
  Ver(){
    $("#submenu").css("display", "none");
    $("#fecha").css("display", "none");
    $("#carga").css("display", "none");
    $("#Ver").css("display", "block");

  },
  cambiar2() {
    $("#UltimaFecha").css("display", "none");
    $( "#FechasA" ).removeClass( "active" )
    $( "#LinkFecha" ).removeClass( "active" )
    $( "#LinkArchivo" ).addClass( "active" )
    $("#fecha").css("display", "none");
    $("#carga").css("display", "block");
  },
  Regresar() {
    $("#submenu").css("display", "block");
    $("#Ver").css("display", "none");
    $("#UltimaFecha").css("display", "none");
    $("#carga").css("display", "block");
  }, 
  ultima() {
    $( "#LinkFecha" ).removeClass( "active" )
    $( "#LinkArchivo" ).removeClass( "active" )
    $( "#FechasA" ).addClass( "active" )
    $("#fecha").css("display", "none");
    $("#carga").css("display", "none");
    $("#Ver").css("display", "none");
    $("#UltimaFecha").css("display", "block");

    let formData = new FormData();
    const path = URL_TEACHERS+ '/ultimaFecha' ;

    axios.post(path,
        formData,
        {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
        
      }
    ).then(function(res){



    $(fechaAFaces).val(res.data["Faces"])
    $(fechaAFacyt).val(res.data["Facyt"])
    $(fechaAFace).val(res.data["Face"])
    $(fechaADerecho).val(res.data["Fcs"])
    $(fechaAOdontologia).val(res.data["Odontologia"])
    $(fechaAFcjp).val(res.data["Fcjp"])
    $(fechaAIngieneria).val(res.data["Ingieneria"])
    $(API).val(res.data["APi"])   
    console.log(res.data); 
    console.log('SUCCESS!!');

    })
    .catch(res=> {
    console.log(res);
    console.log('FAILURE!!');
    });


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
  }
  ,computed: {
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
             width:1263px;
             height: 332px;
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

.intru {display:none;}

 }

  @media (max-width: 1000px) { 

    #enviar {margin-top:10px;width:100%;}


 }
  .margen{
          
         
          margin-top:8%;
          margin-bottom:8%;
        }
  #boton{
          display:bloack;
           margin:auto;

       
        }

 


.form-group{
    margin-top:-10px;
}
</style>    

