<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "App",

  setup() {
    onMounted(() => {
      console.log("env var:", import.meta.env);
    });
  },
});
</script>
