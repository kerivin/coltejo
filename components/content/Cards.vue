<script lang="ts" setup>
interface CardsProps {
  columns: number;
}
const props = defineProps<CardsProps>();

// https://www.reddit.com/r/tailwindcss/comments/10vygle/tailwind_vue_dynamic_classes/
const grid = computed<string>(() => {
  var str = "grid gap-4 grid-cols-1";
  switch(props.columns) {
    case 2:
      str += " lg:grid-cols-2";
      break;
    case 3:
      str += " lg:grid-cols-3";
      break;
    case 4:
      str += " lg:grid-cols-4";
      break;
    case 5:
      str += " lg:grid-cols-5";
      break;
    case 6:
      str += " lg:grid-cols-6";
      break;
    case 7:
      str += " lg:grid-cols-7";
      break;
    case 8:
      str += " lg:grid-cols-8";
      break;
    case 9:
      str += " lg:grid-cols-9";
      break;
    case 10:
      str += " lg:grid-cols-10";
      break;
    case 11:
      str += " lg:grid-cols-11";
      break;
    case 12:
      str += " lg:grid-cols-11";
      break;
  }
  console.log(str);
  return str;
});
</script>

<template>
  <div :class="grid">
    <slot />
  </div>
</template>