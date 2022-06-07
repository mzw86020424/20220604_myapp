<template>
<div>
    <v-card class="mx-auto my-12" elevation="5" outlined shaped>
        <v-img
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle v-if="!item.done">未完了</v-card-subtitle>
        <v-card-text>{{ item.id }}</v-card-text>
    </v-card>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ListCard',
    props: {
    title: String,
    item: {}
    },
});
</script>