<template>
  <div class="dropdown" ref="dropdown">
    <div class="dropdown--header" @click.stop="isOpen = !isOpen">
      <p>
        {{ title }}
      </p>
      <ArrowDown />
    </div>
    <div v-if="isOpen" class="dropdown--body">
      <ul>
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import ArrowDown from "../assets/svg/arrowdown.vue";
import type { OnClickOutsideHandler } from "@vueuse/core";
import { onClickOutside } from "@vueuse/core";

export default defineComponent({
  components: {
    ArrowDown,
  },
  props: ["title", "list"],
  setup() {
    const isOpen = ref(false);

    const dropdown = ref();

    onClickOutside(dropdown, (event) => {
      isOpen.value = false;
    });

    return {
      isOpen,
      dropdown,
      close,
    };
  },
});
</script>
