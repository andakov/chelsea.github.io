<template>
    <h1>Shop</h1>
    <div class="container">
        <div class="side_nav">
            <div class="size">
                <div class="title">Sizes</div>
                <div class="size_cards">
                    <div class="size_item" v-for="(category, index) in sizes"
                         :key="index"
                         @click="filterArticle(category)">{{ category }}
                    </div>
                </div>
            </div>
            <div class="type">
                <div class="title">Kit type</div>
                <div class="type_cards">
                    <div class="type_item">
                        <input type="radio" id="home_kit" value="Home"/>
                        <label for="home_kit">Home</label>
                    </div>
                    <div class="type_item">
                        <input type="radio" id="away_kit" value="Away"/>
                        <label for="away_kit">Away</label>
                    </div>
                    <div class="type_item">
                        <input type="radio" id="third_kit" value="Third"/>
                        <label for="third_kit">Third</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab_container">
            <div class="tabs">
                <div v-for="(i,index) of tabs">
                    <div @click="selectTab(index)"
                         :class="{ 'active': activeTab === index }" class="tab">{{ i.label }}
                    </div>
                </div>
            </div>
            <div class="tab-content">
                <div class="grid_content">
                    <div class="card" v-for="i of filteredArticles">
                        <img :src="i.img" alt="">
                        <div class="name">{{ i.name }}</div>
                        <div class="price"><strong>$ {{ i.price }}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";

const selected = ref(null)
const sizes = ref(['S', 'M', 'L', 'XL', 'XXL'])
const tabs = ref([
    {
        label: 'Men',
        content: [
            {
                name: 'Chelsea Nike Home Stadium Shirt 2023-24',
                price: 133,
                type: "Home",
                player: "Enzo",
                size: "L",
                img: 'https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2023-24-with-enzo-8-printing_ss5_p-14401551+u-arb0ihztpgjeszzspurf+v-9k9ptzjowd4algmpbikc.jpg?_hv=2'
            },
            {
                name: 'Chelsea Nike Third Stadium Shirt 2023-24',
                price: 99,
                type: "Third",
                player: "Enzo",
                size: "L",
                img: 'https://images.footballfanatics.com/chelsea/chelsea-third-stadium-shirt-2023-24-kids-with-nkunku-18-printing_ss5_p-200546042+u-dh1qze8ktfhw1dznfaaq+v-kivlc77bypkgakdbulbl.jpg?_hv=2'
            },
            {
                name: 'Chelsea Nike Away Stadium Shirt 2023-24',
                price: 89,
                type: "Away",
                player: "Enzo",
                size: "L",
                img: 'https://images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2023-24-with-james-24-printing_ss5_p-14402640+u-cghir0gq5bkpcoryxyzc+v-tg43ztb8zcjlb3qr2fvo.jpg?_hv=2'
            },
            {
                name: 'Chelsea Nike Strike Training Top',
                price: 140,
                type: "Home",
                player: "Enzo",
                size: "L",
                img: 'https://images.footballfanatics.com/chelsea/chelsea-nike-strike-training-top-white_ss5_p-13387581+pv-1+u-tcjvfu6r61mxuqwvleao+v-zccrht64xsqz7dy0elmf.jpg?_hv=2&w=900'
            }
        ],
    },
    {
        label: 'Woman',
        content: []
    },
    {label: 'Kids', content: 'Содержимое третьей вкладки'},
])
const data = ref([
    {
        name: 'Chelsea Nike Home Stadium Shirt 2023-24',
        price: 133,
        type: "Home",
        player: "Enzo",
        size: "L",
        img: 'https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2023-24-with-enzo-8-printing_ss5_p-14401551+u-arb0ihztpgjeszzspurf+v-9k9ptzjowd4algmpbikc.jpg?_hv=2'
    },
    {
        name: 'Chelsea Nike Third Stadium Shirt 2023-24',
        price: 99,
        type: "Third",
        player: "Enzo",
        size: "S",
        img: 'https://images.footballfanatics.com/chelsea/chelsea-third-stadium-shirt-2023-24-kids-with-nkunku-18-printing_ss5_p-200546042+u-dh1qze8ktfhw1dznfaaq+v-kivlc77bypkgakdbulbl.jpg?_hv=2'
    },
    {
        name: 'Chelsea Nike Away Stadium Shirt 2023-24',
        price: 89,
        type: "Away",
        player: "Enzo",
        size: "XL",
        img: 'https://images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2023-24-with-james-24-printing_ss5_p-14402640+u-cghir0gq5bkpcoryxyzc+v-tg43ztb8zcjlb3qr2fvo.jpg?_hv=2'
    },
    {
        name: 'Chelsea Nike Strike Training Top',
        price: 140,
        type: "Home",
        player: "Enzo",
        size: "L",
        img: 'https://images.footballfanatics.com/chelsea/chelsea-nike-strike-training-top-white_ss5_p-13387581+pv-1+u-tcjvfu6r61mxuqwvleao+v-zccrht64xsqz7dy0elmf.jpg?_hv=2&w=900'
    }
])
const activeTab = ref(0)
const selectTab = (index) => {
    activeTab.value = index;
}
const filteredArticles = computed(() => {
    return selected.value
        ? data.value.filter((item) => item.size === selected.value)
        : data.value;
});
const filterArticle = (category) => {
    selected.value = category;
}
const showAll = () => {
    selected.value = null;
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.side_nav {
  width: 20%;
  margin-top: 68px;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  height: fit-content;

  .size {
    margin-bottom: 20px;

    .size_cards {
      display: flex;
    }

    .size_item {
      width: 54px;
      text-align: center;
      background: #f3f8ff;
      cursor: pointer;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
}

.tab_container {
  width: 80%;
}

.tabs {
  width: fit-content;
  margin: auto;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  background: #003d95;
  padding: 2px;
}

.tab {
  padding: 5px 20px;
  background: transparent;
  cursor: pointer;
  color: #cbcbcb;
  border-radius: 50px;
}

/*.tab:first-child {
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
}*/

.tab.active {
  background-color: #fff;
  color: #000;
}

.tab-content {
  margin-top: 10px;
  //border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
}

.grid_content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.card {
  padding: 20px;
  border-radius: 10px;
  background: #f3f8ff;
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    margin: auto;
    border-radius: 10px;
  }

  .price {
    font-size: 22px;
  }
}

.card:hover {
}
</style>