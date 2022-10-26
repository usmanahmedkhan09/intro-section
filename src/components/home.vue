<template>
  <div class="container">
    <div class="home_page">
      <div class="des">
        <div>
          <div class="title">
            <h1>Make</h1>
            <h1>Remote Work</h1>
          </div>
          <div class="sub_titles">
            <p>get your team in sync, no matter your location.</p>
            <p>
              Streamline processes, create team rituals, and watch productivity
              soar
            </p>
          </div>
          <div class="button">
            <button class="button">Learn More</button>
          </div>
        </div>
        <div class="icons">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div class="image_wrapper">
        <div class="image">
          <img :src="getImage('image-hero-desktop.png')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import UtilService from "@/Services/util.service";
import Audiophile from "@/assets/svg/audiophile.vue";
import Databiz from "@/assets/svg/databiz.vue";
import Maker from "@/assets/svg/maker.vue";
import Meet from "@/assets/svg/meet.vue";

export default defineComponent({
  components: {
    Audiophile,
    Databiz,
    Maker,
    Meet,
  },
  setup() {
    const getImage = (url: any) => UtilService.getImageUrl(url);
    return {
      getImage,
    };
  },
});
</script>
