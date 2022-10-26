<template>
  <div class="backdrop" :class="sidebar ? 'open' : ''">
    <div class="sidebar">
      <div class="icon">
        <CrossIcon @click="$emit('close')" />
      </div>
      <div class="menu">
        <dl class="list">
          <dt>
            <span role="feature">Feature</span>
            <span role="arrow-down" class="arrowdown" @click="showFeatures = !showFeatures"
              ><ArrowDown
            /></span>
          </dt>
          <dd v-if="showFeatures">
            <p role="todolist">
              <TodoList />
              TodoList
            </p>
            <p role="calender">
              <Calender />
              Calendar
            </p>
            <p role="reminder">
              <Reminder />
              Reminders
            </p>
            <p role="planning">
              <Planning />
              Planning
            </p>
          </dd>
          <dt>
            <span role="company">Company</span>
            <span role="arrow" class="arrowdown" @click="showCompany = !showCompany">
              <ArrowDown />
            </span>
          </dt>
          <dd v-if="showCompany">
            <p role="history">History</p>
            <p role="team">Our Team</p>
            <p role="blog">Blog</p>
          </dd>
          <dt>
            <dd role="careers">Careers</dd>
          </dt>
          <dt>
            <dd role="about">About</dd>
          </dt>
        </dl>
      </div>
      <div class="buttons" role="button">
        <button role="login">Login</button>
        <button class="active" role="register">Register</button>
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
