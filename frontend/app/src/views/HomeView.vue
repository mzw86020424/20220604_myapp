<template>
  <div>
    <title-logo />
    <list-card></list-card>
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
});
</script>
