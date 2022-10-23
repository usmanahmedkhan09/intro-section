<template>
  <div class="dropdown">
    <div class="dropdown--header">
      <p>
        {{ title }}
      </p>
      <ArrowDown @click="isOpen = !isOpen" />
    </div>
    <div ref="dropdown" class="dropdown--body" :class="{ open: isOpen }">
      <ul>
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import ArrowDown from "../assets/svg/arrowdown.vue";
import { onClickOutside } from "@vueuse/core";

export default defineComponent({
  components: {
    ArrowDown,
  },
  props: ["title", "list"],
  setup() {
    const isOpen = ref(false);
    const dropdown = ref();

    const close = () => {
      isOpen.value = false;
    };

    onMounted(() => {
      onClickOutside(dropdown, close);
    });

    return {
      isOpen,
      dropdown,
    };
  },
});
</script>
