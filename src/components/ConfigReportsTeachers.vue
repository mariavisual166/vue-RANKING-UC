<template>
    <div class="row" style="margin-top: 3%">
       <SidebarReportsTeachers></SidebarReportsTeachers>

       <Main></Main>
    </div>
</template>


<script>
import SidebarReportsTeachers from '@/components/SidebarReportsTeachers'
import Main from '@/components/Main'
export default {
    name: 'ConfigReportsTeachers',
    components: {
        SidebarReportsTeachers,
        Main
    }
}
</script>