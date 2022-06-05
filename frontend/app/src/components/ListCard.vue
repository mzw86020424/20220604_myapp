<template>
<div>
    <v-card elevation="5" outlined shaped>
        <v-img
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
        <v-card-title>TEST</v-card-title>
        <v-card-subtitle>this is subtitle about test</v-card-subtitle>
        <v-card-text>this is main text about test. lorem ipsum</v-card-text>
    </v-card>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ListCard',
    props: {
    title: String,
    },
});
</script>