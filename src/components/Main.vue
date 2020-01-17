<template>
    <div class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>

export default {
  name: 'Main'
}
</script>