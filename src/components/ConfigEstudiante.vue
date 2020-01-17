<template>
    <div class="row" style="margin-top: 3%">
       <SidebarEstudiante></SidebarEstudiante>

       <Main></Main>
    </div>
</template>


<script>
import SidebarEstudiante from '@/components/SidebarEstudiante'
import Main from '@/components/Main'
export default {
    name: 'ConfigEstudiante',
    components: {
        SidebarEstudiante,
        Main
    
    }
    
}
</script>