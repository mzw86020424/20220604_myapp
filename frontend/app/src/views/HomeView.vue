<template>
  <div>
    <ul>
        <list-card  v-for="item in items" :key="item.id" :item="item"/>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';


// Components
import ListCard from '../components/ListCard.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    ListCard,
  },

  methods: {
    getListCards() {
      axios
      .get('http://localhost:8000/tasks')
      .then(response => (
        this.$store.commit('index_items', response.data)
      ));
      console.log('getlistcards')
    },
  },

  data() {
    return {
      items: Array,
    }
  },

  created() {
    this.getListCards();
  },

});
</script>
