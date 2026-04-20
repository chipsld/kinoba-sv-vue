<script setup lang="ts">
import { GITHUB_URL } from "@/consts";
import yellowCircleSquare from "../assets/images/background/yellow-circle-square.svg?url";
import twoBlueTriangles from "../assets/images/background/two-blue-triangles.svg?url";
import redCircleHalfCircle from "../assets/images/background/red-circle-half-circle.svg?url";
</script>

<template>
  <section class="relative py-28 lg:py-32 lg:pt-44 overflow-hidden">
    <div
      class="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20 m-8"
    >
      <div class="flex-1">
        <h1
          class="text-black max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap gap-2"
        >
          L’<span class="bg-yellow-500 text-black rounded px-1"
            >agence web</span
          >
          <br />
          <br />
          pour
          <span class="bg-blue-500 text-black rounded px-1">entreprises</span
          >{{ " "
          }}<span class="bg-red-500 text-black rounded px-1">innovantes</span>
        </h1>

        <p class="text-muted-foreground text-1xl mt-5 md:text-3xl">
          Développement web sur mesure
          <br />Renfort d’équipes informatiques
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
          <a
            :href="GITHUB_URL"
            class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-base font-medium transition-all"
          >
            Parle nous de ton projet
          </a>
        </div>

        <!-- Decorative background images -->
        <div class="pointer-events-none select-none flex items-end gap-4 mt-10">
          <img
            :src="yellowCircleSquare"
            alt=""
            aria-hidden="true"
            class="w-80 opacity-80"
          />
          <img
            :src="twoBlueTriangles"
            alt=""
            aria-hidden="true"
            class="w-40 opacity-70 mb-6"
          />
          <img
            :src="redCircleHalfCircle"
            alt=""
            aria-hidden="true"
            class="w-40 opacity-60 mb-3"
          />
        </div>
      </div>

      <div
        class="relative flex flex-1 flex-col justify space-y-5 mx-20 max-lg:pt-10 lg:pl-10 mt-20"
      >
        <div
          class="text-muted-foreground absolute top-0 left-0 hidden h-full w-px lg:block"
        >
          <div
            class="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"
          />
        </div>
        <div class="text-muted-foreground absolute top-0 w-full lg:hidden">
          <div
            class="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"
          />
        </div>

        <div
          v-for="feature in features"
          :key="feature.title"
          class="flex gap-2.5 lg:gap-5"
        >
          <div>
            <h2 class="font-text text-foreground font-semibold">
              {{ feature.title }}
            </h2>
            <p class="text-muted-foreground max-w-76 text-sm">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container m-8 mt-0">
      <div class="rounded-xl border bg-yellow p-6 md:p-8">
        <p class="text-base leading-relaxed md:text-lg">
          Kinoba est une agence de développement web à Lyon et Paris, constituée
          d’une tribu experte et passionnée par la création sur mesure de
          plateformes web et du renfort d’équipes techniques, qui est là pour
          répondre à tous tes besoins numériques. Que tu sois un entrepreneur,
          une start-up, une PME ou un grand groupe, ton projet web est unique et
          nous avons à cœur de devenir ton partenaire de confiance pour
          t’accompagner vers le succès.
        </p>
      </div>
    </div>
  </section>
</template>
