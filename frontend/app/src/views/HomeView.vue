<template>
  <div>
    <ul>
        <list-card v-for="item in items.slice().reverse()" :key="item.id" :item="item" @parentMethod="getListCards" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListCard from '../components/ListCard.vue';

export default Vue.extend({
  name: 'HomeView',

  components: {
    ListCard,
  },

  data() {
    return {
      items: []
    }
  },

  methods: {
    async getListCards() {
      await this.$store.dispatch('fetch_items');
      this.items = this.$store.getters.items;
    },
  },

  async created() {
    await this.getListCards();
    this.items = this.$store.getters.items;
  },

});
</script>
