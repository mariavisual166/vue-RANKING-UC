<template>
    <div class="row" style="margin-top: 3%">
       <SidebarReportsGraduates></SidebarReportsGraduates>

       <Main></Main>
    </div>
</template>


<script>
import SidebarReportsGraduates from '@/components/SidebarReportsGraduates'
import Main from '@/components/Main'
export default {
    name: 'ConfigReportsGraduates',
    components: {
        SidebarReportsGraduates,
        Main
    }
}
</script>