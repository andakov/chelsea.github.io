<template>
    <header>
        <div class="left_header">
            <nav>
                <ul>
                    <li><a href="">Жаңалықтар</a></li>
                    <li><a href="#/team">Құрама</a></li>
                    <li><a href="">Магазин</a></li>
                    <li><a href="">Келесі матчтар</a></li>
                </ul>
            </nav>
        </div>
        <a href=""><img alt="Vue logo" class="logo" src="../assets/logo.png"/></a>
        <div class="right_header">
            <nav>
                <ul>
                    <li><a href="">Tickets</a></li>
                    <li><a href="">Men's team</a></li>
                    <li><a href="#/shop">{{ t('shop') }}</a></li>
                    <li><a href="#/news">News</a></li>
                    <li>
                        <select v-model="locale">
                            <option>kz</option>
                            <option>en</option>
                        </select></li>
                </ul>
            </nav>
            <div class="mode-toggle" @click="modeToggle" :class="darkDark">
                <div class="toggle">
                    <div id="dark-mode" type="checkbox"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {computed, ref} from "vue";

const {t, locale} = useI18n();
const darkMode = ref(false)
const emit = defineEmits();
const dark = () => {
    document.querySelector('body').classList.add('dark-mode')
    darkMode.value = true
    emit('dark')
}

const light = () => {
    document.querySelector('body').classList.remove('dark-mode')
    darkMode.value = false
    emit('light')
}

const modeToggle = () => {
    if (darkMode.value || document.querySelector('body').classList.contains('dark-mode')) {
        console.log('body')
        light()
    } else {
        dark()
    }
}

const darkDark = computed(() => {
    return darkMode.value ? 'darkmode-toggled' : '';
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  //position: absolute;
  top: 0;
  font-family: 'Victor Mono', monospace;
  padding: 15px 0;
  //backdrop-filter: blur(5px);
  //background-color: rgba(15, 19, 38, 0.55);
  //background: rgba(0, 0, 0, 0.50);
  display: flex;
  justify-content: space-around;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;

    a {
      padding: 0 20px;
      color: #fff;
      text-decoration: none;
    }
  }

  .left_header {
    width: 42%;
    height: 0;
    border-bottom: 55px solid rgba(0, 0, 0, 0.55);
    border-right: 30px solid transparent;
  }

  .right_header {
    position: relative;
    width: 42%;
    height: 0;
    border-bottom: 55px solid rgba(0, 0, 0, 0.65);
    border-left: 30px solid transparent;
  }

  .triangle-down {
    /*   position: relative;
       border-left: 75px solid transparent;
       border-right: 75px solid transparent;
       border-top: 150px solid #555;*/
  }

  img {
    width: 80px;
    height: 80px;
  }
}
</style>