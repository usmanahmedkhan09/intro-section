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
    <div class="buttons">
      <button>Login</button>
      <button class="active">Register</button>
    </div>
    <div class="menu_icon">
      <MenuIcon @click="sidebar = true" />
    </div>
  </div>
  <Sidebar :sidebar="sidebar" @close="sidebar = false" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Logo from "@/assets/svg/logo.vue";
import Dropdown from "@/components/dropdown.vue";
import MenuIcon from "@/assets/svg/menu.vue";
import Sidebar from "@/components/sidebar.vue";

export default defineComponent({
  components: {
    Logo,
    Dropdown,
    MenuIcon,
    Sidebar,
  },
  setup() {
    const sidebar = ref(false);
    const menu_one = ref([
      { name: "Todo List", icon: "todo-list" },
      { name: "Calender", icon: "calender" },
      { name: "Planning", icon: "planning" },
      { name: "Reminder", icon: "reminder" },
    ]);

    const menu_two = ref([
      { name: "History", icon: "" },
      { name: "Our Team", icon: "" },
      { name: "Blog", icon: "" },
    ]);

    const getImageUrl = (name: string) => {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    };

    return {
      menu_one,
      menu_two,
      getImageUrl,
      sidebar,
    };
  },
});
</script>
