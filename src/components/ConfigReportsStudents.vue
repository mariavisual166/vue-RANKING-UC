<template>
    <div class="row" style="margin-top: 3%">
       <SidebarReportsStudents></SidebarReportsStudents>

       <Main></Main>
    </div>
</template>


<script>
import SidebarReportsStudents from '@/components/SidebarReportsStudents'
import Main from '@/components/Main'
export default {
    name: 'ConfigReportsStudents',
    components: {
        SidebarReportsStudents,
        Main
    }
}
</script>