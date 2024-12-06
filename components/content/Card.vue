<!-- https://github.com/unovue/inspira-ui/blob/main/components/content/inspira/ui/glare-card/GlareCard.vue -->

<script setup lang="ts">

import { cn } from "~/lib/utils";

interface CardProps {
  class?: string;
  rotateFactor: number;
}

const props = withDefaults(defineProps<CardProps>(), {
  rotateFactor: 0.4,
});

const isPointerInside = ref(false);
const refElement = ref<HTMLElement | null>(null);

const state = ref({
  glare: { x: 50, y: 50 },
  background: { x: 50, y: 50 },
  rotate: { x: 0, y: 0 },
});

function handlePointerMove(event: PointerEvent) {
  const rotateFactor = props.rotateFactor;
  const rect = refElement.value?.getBoundingClientRect();
  if (rect) {
    const position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    const percentage = {
      x: (100 / rect.width) * position.x,
      y: (100 / rect.height) * position.y,
    };
    const delta = {
      x: percentage.x - 50,
      y: percentage.y - 50,
    };
    state.value.background.x = 50 + percentage.x / 4 - 12.5;
    state.value.background.y = 50 + percentage.y / 3 - 16.67;
    state.value.rotate.x = -(delta.x / 3.5) * rotateFactor;
    state.value.rotate.y = (delta.y / 2) * rotateFactor;
    state.value.glare.x = percentage.x;
    state.value.glare.y = percentage.y;
  }
}

function handlePointerEnter() {
  isPointerInside.value = true;
  useTimeoutFn(() => {
    if (isPointerInside.value && refElement.value) {
      refElement.value.style.setProperty("--duration", "0s");
    }
  }, 300);
}

function handlePointerLeave() {
  isPointerInside.value = false;
  if (refElement.value) {
    refElement.value.style.removeProperty("--duration");
    state.value.rotate = { x: 0, y: 0 };
  }
}
</script>


<template>
  <div ref="refElement"
    class="container-style duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] container relative isolate transition-transform will-change-transform [aspect-ratio:17/21] [contain:layout_style] [perspective:600px]"
    @pointermove="handlePointerMove" @pointerenter="handlePointerEnter" @pointerleave="handlePointerLeave">
    <div :class="cn('size-full', props.class)">
      <div
        class="duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] grid h-full origin-center overflow-hidden rounded-lg border border-slate-800 transition-transform will-change-transform [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] hover:filter-none hover:[--duration:200ms] hover:[--easing:linear] hover:[--opacity:0.6]">
        <div class="grid size-full [clip-path:inset(0_0_0_0_round_var(--radius))] [grid-area:1/1]">
          <GlareCardView class="bg-slate-600">
            <slot />
          </GlareCardView>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-style {
  --m-x: v-bind(state.glare.x + "%");
  --m-y: v-bind(state.glare.y + "%");
  --r-x: v-bind(state.rotate.x + "deg");
  --r-y: v-bind(state.rotate.y + "deg");
  --bg-x: v-bind(state.background.x + "%");
  --bg-y: v-bind(state.background.y + "%");
  --duration: 300ms;
  --foil-size: 100%;
  --opacity: 0;
  --radius: 36px;
  --easing: ease;
  --transition: var(--duration) var(--easing);
}

.im-fell-english-sc-regular {
  font-family: "IM Fell English SC", serif;
  font-weight: 400;
  font-style: normal;
}

.im-fell-dw-pica-regular {
  font-family: "IM Fell DW Pica", serif;
  font-weight: 400;
  font-style: normal;
}

.im-fell-dw-pica-regular-italic {
  font-family: "IM Fell DW Pica", serif;
  font-weight: 400;
  font-style: italic;
}
</style>