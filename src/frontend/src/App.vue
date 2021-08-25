<template>
    <Icon class="icon" :name="nameOfIcon"></Icon>
    <!-- <nav>
        <router-link :to="'/'">Home</router-link>
    </nav> -->
    <div id="main">
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Icon from "./components/Icon/Icon.vue";
let nameOfIcon = ref("token");
</script>
<style lang="scss">
// @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css);
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: "Bree Serif", serif;
}
.icon {
    font-size: 10vh;
    line-height: 12vh;
}
</style>
