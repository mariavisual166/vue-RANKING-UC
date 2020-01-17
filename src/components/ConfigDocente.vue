<template>
    <div class="row" style="margin-top: 3%">
       <SidebarDocente></SidebarDocente>

       <Main></Main>
    </div>
</template>


<script>
import SidebarDocente from '@/components/SidebarDocente'
import Main from '@/components/Main'
export default {
    name: 'Config',
    components: {
        SidebarDocente,
        Main
    }
}
</script>