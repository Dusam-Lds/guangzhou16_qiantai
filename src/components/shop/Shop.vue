<template>
    <div>
        <!-- 公共的总部 -->
        <app-header></app-header>
        <!-- 变化的主体 -->
        <router-view></router-view>
        <!-- 公共底部 -->
        <app-footer></app-footer>
    </div>
</template>

<script>
import appHeader from './subcom/Header.vue';
import appFooter from './subcom/Footer.vue'
    export default {
        components: {
            appHeader,
            appFooter
        }
    }
</script>

<style scoped>

</style>