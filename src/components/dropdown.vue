<template>
  <div class="dropdown">
    <div class="dropdown--header">
      <p>
        {{ title }}
      </p>
      <ArrowDown @click="isOpen = !isOpen" />
    </div>
    <div class="dropdown--body" :class="{ open: isOpen }">
      <ul>
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ArrowDown from "../assets/svg/arrowdown.vue";

export default defineComponent({
  components: {
    ArrowDown,
  },
  props: ["title", "list"],
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
});
</script>
