<script setup lang="ts">
import { format } from "date-fns";

const props = defineProps<{
  post: any;
}>();

const {
  title,
  authorName = "",
  image = "",
  pubDate,
  description,
  authorImage = "",
} = props.post.data;
</script>

<template>
  <section>
    <div class="container">
      <div class="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <h1 class="max-w-3xl text-4xl font-bold md:text-5xl">{{ title }}</h1>
        <h3 class="text-muted-foreground max-w-4xl">{{ description }}</h3>

        <div class="flex items-center gap-3 text-sm md:text-base">
          <span class="inline-flex h-8 w-8 overflow-hidden rounded-full border">
            <img :src="authorImage" alt="author avatar" class="h-full w-full object-cover" />
          </span>

          <span>
            <a href="#" class="font-semibold">{{ authorName }}</a>
            <span class="ml-1">on {{ format(pubDate, "MMMM d, yyyy") }}</span>
          </span>
        </div>

        <img
          :src="image"
          alt="placeholder"
          class="mt-0 mb-8 aspect-video w-full rounded-lg border object-cover"
        />
      </div>
    </div>

    <div class="container">
      <div class="prose mx-auto max-w-3xl">
        <slot />
      </div>
    </div>
  </section>
</template>
