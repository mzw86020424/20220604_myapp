<template>
<div>
    <v-card class="mx-auto my-12" elevation="2" max-width="374">
        <v-img
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
        <v-card-title>{{  item.id }} : {{ item.title }}</v-card-title>
        <v-btn color="error" @click="doneItem(item.id)" v-if="!item.done">未完了</v-btn>
        <v-btn color="primary" @click="undone_item(item.id)" v-if="item.done">完了</v-btn>
        <v-card-text>lorem ipsum hoge fuga foo bar</v-card-text>
        <button
        @click="deleteListCard(item.id)"
        >delete</button>
    </v-card>
</div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '../store/index'

@Component
export default class ListCard extends Vue {
    // props
    @Prop({ type: Object })
    item = {
            id: '',
            title: '',
            done: false,
    };
    // methods
    async deleteListCard(id: number) {
        await store.dispatch('delete_item', id);
        this.$emit('parentMethod');
    }

        async doneItem(id: string) {
        await store.dispatch('done_item', id);
        this.$emit('parentMethod');
    }

        async undone_item(id: string) {
        await store.dispatch('undone_item', id);
        this.$emit('parentMethod');
    }
}
</script>