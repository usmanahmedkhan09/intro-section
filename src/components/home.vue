<template>
  <div class="home">
    <div class="des">
      <h1>Make Remote Work</h1>
    </div>
    <div class="image">
      <img :src="getImage('image-hero-desktop.png')" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import UtilService from "@/Services/util.service";

export default defineComponent({
  setup() {
    const getImage = (url: any) => UtilService.getImageUrl(url);
    return {
      getImage,
    };
  },
});
</script>
