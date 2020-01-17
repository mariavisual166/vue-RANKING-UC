<template>
    <div class="row" style="margin-top: 3%">
       <Sidebar></Sidebar>

       <Main></Main>
    </div>
</template>


<script>
import Sidebar from '@/components/Sidebar'
import Main from '@/components/Main'
export default {
    name: 'Config',
    components: {
        Sidebar,
        Main
    }
}
</script>