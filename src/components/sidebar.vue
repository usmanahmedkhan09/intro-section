<template>
  <div class="backdrop" :class="sidebar ? 'open' : ''">
    <div class="sidebar">
      <div class="icon">
        <CrossIcon @click="$emit('close')" />
      </div>
      <div class="menu">
        <dI>
          <dt>Feature</dt>
          <dt>Company</dt>
          <dt>Careers</dt>
          <dt>About</dt>
        </dI>
      </div>
    </div>
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
    // let image = ref('./../assets/images/favicon-32x32.png')
    return {};
  },
});
</script>
