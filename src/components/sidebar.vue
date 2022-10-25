<template>
  <div class="backdrop" :class="sidebar ? 'open' : ''">
    <div class="sidebar">
      <div class="icon">
        <CrossIcon @click="$emit('close')" />
      </div>
      <div class="menu">
        <dl class="list">
          <dt>
            <span>Feature</span>
            <span class="arrowdown"><ArrowDown /></span>
          </dt>
          <dd>
            <p>
              <TodoList />
              TodoList
            </p>
            <p>
              <Calender />
              Calendar
            </p>
            <p>
              <Reminder />
              Reminders
            </p>
            <p>
              <Planning />
              Planning
            </p>
          </dd>
          <dt>
            <span>Company</span>
            <span class="arrowdown">
              <ArrowDown />
            </span>
          </dt>
          <dt>Careers</dt>
          <dt>About</dt>
        </dl>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import CrossIcon from "@/assets/svg/crossIcon.vue";
import ArrowDown from "@/assets/svg/arrowdown.vue";
import Reminder from "@/assets/svg/reminder.vue";
import Planning from "@/assets/svg/planning.vue";
import Calender from "@/assets/svg/calendar.vue";
import TodoList from "@/assets/svg/todo-list.vue";

export default defineComponent({
  props: {
    sidebar: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CrossIcon,
    ArrowDown,
    Reminder,
    Planning,
    Calender,
    TodoList,
  },
  setup(props) {
    // let image = ref('./../assets/images/favicon-32x32.png')
    return {};
  },
});
</script>
