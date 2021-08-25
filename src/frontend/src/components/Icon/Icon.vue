<template>
    <span translate="no" class="icon material-icons">
        {{ name }}
    </span>
</template>
<script lang="ts" setup>
const props = defineProps<{
    name: string;
}>();
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
</style>
