<template>
  <div class="backdrop" :class="sidebar ? 'open' : ''">
    <aside>
      <CrossIcon @click="$emit('close')" />
    </aside>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import CrossIcon from "@/assets/svg/crossIcon.vue";

export default defineComponent({
  props: {
    sidebar: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CrossIcon,
  },
  setup(props) {
    return {};
  },
});
</script>
