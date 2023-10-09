<template>
    <div class="tabs">
        <div  v-for="(tab, index) in tabs"
              :key="index">
        <div

                @click="selectTab(index)"
                :class="{ 'active': activeTab === index }"
                class="tab"
        >
            {{ tab.label }}
        </div>
        <div class="tab-content" v-if="activeTab === index">
            {{ tab.content }}
        </div>
    </div>
    </div>
</template>

<script setup>

import {ref} from "vue";

defineProps({
    tabs: {
        type: Array,
        required: true,
    },
})

const activeTab = ref(0)
const content = ref(0)
const selectTab=(index)=> {
    activeTab.value = index;
}
</script>

<style scoped>
.tabs {
    display: flex;
    width: 300px; /* Измените на ваше усмотрение */
}

.tab {
    padding: 10px;
    cursor: pointer;
}

.tab.active {
    background-color: #007bff; /* Измените на ваше усмотрение */
    color: #fff;
}

.tab-content {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>