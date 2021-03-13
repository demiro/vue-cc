<template src="./{componentName}.html"></template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import "./{componentName}.scss";
export default defineComponent({
  name: "{componentNameUpperCase}",
  props: {},
  data() {
    return {};
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },

  methods: {},
});
</script>
