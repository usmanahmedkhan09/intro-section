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
            <span class="arrowdown" @click="showFeatures = !showFeatures"
              ><ArrowDown
            /></span>
          </dt>
          <dd v-if="showFeatures">
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
            <span class="arrowdown" @click="showCompany = !showCompany">
              <ArrowDown />
            </span>
          </dt>
          <dd v-if="showCompany">
            <p>History</p>
            <p>Our Team</p>
            <p>Blog</p>
          </dd>
          <dt>Careers</dt>
          <dt>About</dt>
        </dl>
      </div>
      <div class="buttons">
        <button>Login</button>
        <button class="active">Register</button>
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
    const showFeatures = ref(false);
    const showCompany = ref(false);
    return {
      showFeatures,
      showCompany,
    };
  },
});
</script>
