<script setup lang="ts">
import Header from "./components/shared/Header.vue";
import feather from "feather-icons";
import { onMounted, onUpdated, ref } from "vue";

const appTheme = ref("");

appTheme.value = localStorage.getItem("theme") || "dark";

onMounted(() => {
    feather.replace();
});
onUpdated(() => {
    feather.replace();
});
</script>

<template>
    <div :class="appTheme">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<style lang="scss"></style>
