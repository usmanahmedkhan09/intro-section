<template>
  <div class="navbar">
    <Logo />
    <div class="buttons">
      <button>Login</button>
      <button>Register</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/assets/svg/logo.vue";

export default defineComponent({
  components: {
    Logo,
  },
  setup() {
    const getImageUrl = (name: string) => {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    };
    return {
      getImageUrl,
    };
  },
});
</script>
