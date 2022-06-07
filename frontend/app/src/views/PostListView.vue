<template>
  <div>
      <h1>This is posting page</h1>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="title"
                        label="title"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-btn
            class="mr-4"
            @click="postListCards"
            >
            submit
            </v-btn>
        </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';


// Components

export default defineComponent({
  name: 'PostListView',

  components: {
  },
  
  methods: {
    postListCards() {
        axios
        .post("http://localhost:8000/tasks", {
        title: this.title,
        })
        .then((res) => {
        console.log(res);
        this.id = res.data.id;
        })
        .catch((err) => {
        console.log(err);
        });
    },
  },

  data() {
    return {
        title: String,
        id: String,
    }
  },

  created() {
    //
  },
});
</script>
