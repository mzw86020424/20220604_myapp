<template>
  <div>
    <title-logo />
    <ul id="array-rendering">
      <li v-for="item in items" :key="item.id">
        <list-card :title="item.message" ></list-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import TitleLogo from '../components/TitleLogo.vue';
import ListCard from '../components/ListCard.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    TitleLogo,
    ListCard,
  },
  
  methods: {
    getListCards() {
      console.log('getLists!');
      let items = [
        { id: 1, message: 'Foo' },
        { id: 2, message: 'Bar' },
        { id: 3, message: 'hoge' },
        { id: 4, message: 'fuga' },
        { id: 5, message: 'lorem' },
      ]
      return items
    },
  },

  data() {
    return {
      items: {}
    }
  },

  created() {
    this.items = this.getListCards();
  },
});
</script>
