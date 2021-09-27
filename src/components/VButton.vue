<template>
  <button ref="button">{{ name }}</button>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "v-button",
  props: {
    name: {
      type: String,
      default: "按钮",
    },
  },
  setup(props) {
    console.log(props);
    const button = ref(null);
    onMounted(() => {
      console.log(button.value);
    });

    return {
      button,
    };
  },
};
</script>
