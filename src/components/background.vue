<script setup lang="ts">
type BackgroundProps = {
  variant?: "top" | "bottom";
  className?: string;
};

const props = withDefaults(defineProps<BackgroundProps>(), {
  variant: "top",
  className: undefined,
});
</script>

<template>
  <div
    class="relative mx-2.5 mt-2.5 px-4 md:px-6 lg:mx-4 lg:px-[10%] from-100/50 via-yellow to-yellow/80 rounded-t-4xl rounded-b-2xl bg-linear-to-b via-20% bg-yellow-50"
  >
    <slot />
  </div>
</template>
