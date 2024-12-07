<script lang="ts" setup>
interface CardsProps {
  columns: number;
}
const props = defineProps<CardsProps>();
const grid = computed(() => {
  const str = "grid gap-4 grid-cols-1 lg:grid-cols-" + props.columns;
  console.log(str);
  return str;
});
</script>

<template>
  <div :class="grid">
    <slot />
  </div>
</template>