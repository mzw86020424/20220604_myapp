<template>
  <div>
    <ul id="array-rendering">
      <li v-for="item in items" :key="item.id">
        <list-card :item="item"></list-card>
      </li>
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
        this.items = response.data
      ));
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
