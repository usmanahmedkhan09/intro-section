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
        <li v-for="(item, index) in list" :key="index">
          <Reminder v-if="item.icon == 'reminder'" />
          <Planning v-if="item.icon == 'planning'" />
          <Calender v-if="item.icon == 'calender'" />
          <TodoList v-if="item.icon == 'todo-list'" />
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import ArrowDown from "../assets/svg/arrowdown.vue";
import { onClickOutside } from "@vueuse/core";
import Reminder from "@/assets/svg/reminder.vue";
import Planning from "@/assets/svg/planning.vue";
import Calender from "@/assets/svg/calendar.vue";
import TodoList from "@/assets/svg/todo-list.vue";

export default defineComponent({
  components: {
    ArrowDown,
    Reminder,
    Planning,
    Calender,
    TodoList,
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
