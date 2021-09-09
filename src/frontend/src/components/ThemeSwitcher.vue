<template>
    <a href="#" @click.prevent="toggleTheme">
        <i
            v-if="dheme === 'light'"
            data-feather="moon"
            class="
                text-liText-ternary-dark
                hover:text-gray-400
                dark:text-liText-ternary-light dark:hover:text-li
                Border-primary-light
                w-5
            "
        ></i>
        <i
            v-else
            data-feather="sun"
            class="text-gray-200 hover:text-gray-50 w-5"
        ></i>
    </a>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
    dheme: {
        type: Object as () => string,
        required: true,
    },
});
const emit = defineEmits(["themeChanged"]);
const toggleTheme = () => {
    console.log("theme", props.dheme);
    let newTheme = props.dheme == "light" ? "dark" : "light";
    console.log("newTheme", newTheme);
    localStorage.setItem("theme", newTheme);
    emit("themeChanged", newTheme);
    router.push({ name: "Home" });
};
</script>
