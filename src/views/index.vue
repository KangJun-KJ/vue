<template>
  <h1>Index</h1>
  <v-button name="按钮名称可修改"></v-button>
</template>

<script>
import VButton from "@/components/VButton.vue";
import VInput from "@/components/VInput.Vue";

export default {
  components: {
    VButton,
  },
  setup(props) {
    console.log(arguments);
    return {};
  },
};
</script>
