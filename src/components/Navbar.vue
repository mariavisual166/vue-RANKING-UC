<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light header-border fixed-top">
                <router-link class="navbar-brand mr-auto text-center uc-ranking" to="/" tag="a">
            <img src="../assets/escudo.png" width="52" height="58" class="d-inline-block align-top" alt="">
            UC RANKING 
        </router-link>
    </nav>
</template>

<style>
.uc-ranking {
  font-size: 26px;
 /* font-weight: bold;*/
  text-align: center;
  align-content: center;
  line-height: 50px;
}

.header-border {
  /*border-bottom: 5px solid #981e32;*/
  border-right-style: hidden;
  border-left-style: hidden;
  border-top-style: hidden; 
 
  box-shadow: 
    0 0 0 1px #981e32,
    0 0 0 6px #006d55,
    0 0 0 11px #A17700;
}

/*
.header-border:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  right: -15px;
  bottom: -15px;
  z-index: -1;
}
*/


</style>
