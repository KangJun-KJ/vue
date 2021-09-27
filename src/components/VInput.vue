<template>
  <input type="text" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface InputProps {
  type?: string;
}

interface PersonData {
  name: string;
  age?: number;
}
export default defineComponent({
  // 启用类型推断
  data() {
    return {
      person: {
        name: "kangjun",
        age: 27,
        a: 1,
      } as PersonData,
    };
  },
});
</script>