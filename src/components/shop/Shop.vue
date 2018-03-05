<template>
    <div>
        <!-- 公共的总部 -->
        <app-header></app-header>
        <!-- 变化的主体 -->
        <router-view></router-view>
    </div>
</template>

<script>
import appHeader from './subcom/Header.vue';
    export default {
        components: {
            appHeader
        }
    }
</script>

<style scoped>

</style>