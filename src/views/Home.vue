<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3 p-4 gap-4">
      <div class="grid grid-cols-2 gap-4">
        <MyButton class="row-span-2"></MyButton>

        <MyButton></MyButton>

        <MyButton></MyButton>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div class="h-12 w-12 bg-yellow-600 rounded-sm"></div>
        <div
          class="h-12 w-12 bg-yellow-600 rounded-sm transform rotate-1"
        ></div>
        <div
          class="h-12 w-12 bg-yellow-600 rounded-sm transform rotate-2"
        ></div>
        <div
          class="h-12 w-12 bg-yellow-600 rounded-sm transform rotate-3"
        ></div>
        <div
          class="h-12 w-12 bg-yellow-600 rounded-sm transform rotate-45 row-span-2"
        ></div>
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
