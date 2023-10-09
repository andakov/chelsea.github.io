<template>
    <div class="bg">

    </div>
    <Header/>
    <main>
        <div class="container">
            <component :is="currentView"/>
        </div>
    </main>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import ThreeScene from "@/components/ThreeScene.vue";
import Shop from "@/components/Shop.vue";
import NotFound from "@/components/NotFound.vue";
import Home from "@/components/Home.vue";
import {useI18n} from "vue-i18n";
import Header from "@/components/Header.vue";
import Team from "@/components/Team.vue";

const { t, locale } = useI18n();

const routes = {
    '/': Home,
    '/shop': Shop,
    '/team': Team,
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
})
const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
})

watch(locale, (newlocale) => {
    localStorage.setItem("locale", newlocale);
});
</script>

<style lang="scss" scoped>
.large-header {
  position: relative;
  width: 100%;
  background: #333;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
}

#large-header {
  background-image: url('https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg');
}

.main-title {
  position: absolute;
  margin: 0;
  padding: 0;
  color: #f9f1e9;
  text-align: center;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.demo-1 .main-title {
  text-transform: uppercase;
  font-size: 4.2em;
  letter-spacing: 0.1em;
}

.main-title .thin {
  font-weight: 200;
}

.bg {
  //background-image: url("./assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  //height: 100vh;
  width: 100%;
  z-index: -1;
}

.container {
  padding: 40px 0;
  max-width: 1140px;
  margin: auto;
  line-height: 1.5;
  font-size: 18px;
  font-family: 'Exo 2', sans-serif;
}


</style>
