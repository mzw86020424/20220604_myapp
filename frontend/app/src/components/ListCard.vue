<template>
<div>
    <v-card class="mx-auto my-12" elevation="2" outlined shaped>
        <v-img
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle v-if="!item.done">未完了</v-card-subtitle>
        <v-card-text>{{ item.id }}</v-card-text>
        <button v-on:click="deleteListCard(item.id)">delete</button>
    </v-card>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'ListCard',
    props: {
        title: String,
        item: {}
    },
    
    methods: {
    deleteListCard(id: string) {
        axios
        .delete('http://localhost:8000/tasks/' + id)
        .then(response => (
            console.log(response.data)
        ))
        .catch(error => {
            console.log(error)
        });
        },
    },

    data() {
        return {
            targetTitle: String,
            targetId: String,
        }
    },
});
</script>