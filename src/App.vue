<template>
  <Navbar />
  <Home />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/navbar.vue";
import Home from "@/components/home.vue";
export default defineComponent({
  components: {
    Navbar,
    Home,
  },
  setup() {
    return {};
  },
});
</script>
