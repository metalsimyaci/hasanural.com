<template>
    <nav id="nav" class="container mx-auto">
        <div
            class="
                z-10
                max-w-screen-lg
                xl:max-w-screen-xl
                block
                sm:flex sm:justify-between sm:items-center
                my-6
            "
        >
            <div class="flex justify-between items-center">
                <div>
                    <router-link to="/">
                        Hasan URAL
                        <!-- <img
                            v-if="theme === 'light'"
                            src="../../assets/images/logo-dark.svg"
                            class="w-36"
                            alt="Hasan URAL"
                        />
                        <img
                            v-else
                            src="../../assets/images/logo-light.svg"
                            class="w-36"
                            alt="Hasan URAL"
                        /> -->
                    </router-link>
                </div>

                <theme-switcher
                    :dheme="theme"
                    @themeChanged="updateTheme"
                    class="
                        block
                        bg-ternary-light
                        dark:bg-ternary-dark
                        hover:bg-hover-light
                        dark:hover:bg-hover-dark
                        hover:shadow-sm
                        px-2.5
                        py-2
                        rounded-lg
                        ml-10
                    "
                />
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import feather from "feather-icons";
import ThemeSwitcher from "../ThemeSwitcher.vue";
import { onUpdated, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let theme = ref("");
theme.value = localStorage.getItem("theme") || "light";

// onMounted(() => {
//     theme = localStorage.getItem("theme") || "light";
//     feather.replace();
// });
onUpdated(() => {
    console.log("UPDATE");
    theme.value = localStorage.getItem("theme") || "light";
    console.log("UPDATE", theme.value);
    feather.replace();
});
const updateTheme = (th: string) => {
    console.log("updateTheme");
    console.log("blaaa", th);
    console.log("hhhhh", theme.value);
    theme.value = th;
    router.push({ name: "Home" });
};
</script>
