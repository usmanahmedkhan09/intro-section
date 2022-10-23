<template>
  <div class="navbar">
    <ul class="list">
      <li>
        <Logo />
      </li>
      <li>
        <Dropdown :title="'Features'" :list="menu_one" />
      </li>
      <li>
        <Dropdown :title="'Company'" :list="menu_two" />
      </li>
      <li>Careers</li>
      <li>About</li>
    </ul>
    <!-- <div class="logo_with_items">
      <Logo />
      <Dropdown :title="'Features'" :list="menu_one" />
      <Dropdown :title="'Company'" :list="menu_two" />
    </div> -->

    <div class="buttons">
      <button>Login</button>
      <button class="active">Register</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Logo from "@/assets/svg/logo.vue";
import Dropdown from "@/components/dropdown.vue";

export default defineComponent({
  components: {
    Logo,
    Dropdown,
  },
  setup() {
    const menu_one = ref(["Todo List ", "Calender", "Reminders", "Planning"]);

    const menu_two = ref(["History", "Our Team", "Blog"]);

    const getImageUrl = (name: string) => {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    };
    return {
      menu_one,
      menu_two,
      getImageUrl,
    };
  },
});
</script>
