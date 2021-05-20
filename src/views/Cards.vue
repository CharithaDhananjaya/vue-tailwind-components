<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3 p-4 gap-4">
      <div class="grid grid-cols-2 gap-4">
        <MyButton class="row-span-2"></MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/MyButton";

export default {
  name: "Home",
  components: {
    MyButton,
  },
};
</script>
