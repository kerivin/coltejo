<script lang="ts" setup>
interface CardsProps {
  columns: number;
}
const props = defineProps<CardsProps>();

// https://www.reddit.com/r/tailwindcss/comments/10vygle/tailwind_vue_dynamic_classes/
const grid = computed<string>(() => {
  var str = "grid gap-4 grid-cols-1 ";
  switch(props.columns) {
    case 2:
      str += "md:grid-cols-2";
      break;
    case 3:
      str += "md:grid-cols-3";
      break;
    case 4:
      str += "md:grid-cols-4";
      break;
    case 5:
      str += "md:grid-cols-5";
      break;
    case 6:
      str += "md:grid-cols-6";
      break;
    case 7:
      str += "md:grid-cols-7";
      break;
    case 8:
      str += "md:grid-cols-8";
      break;
    case 9:
      str += "md:grid-cols-9";
      break;
    case 10:
      str += "md:grid-cols-10";
      break;
    case 11:
      str += "md:grid-cols-11";
      break;
    case 12:
      str += "md:grid-cols-12";
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