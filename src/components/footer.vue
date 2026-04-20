<script setup lang="ts">
import logoUrl from "../assets/images/logos/kinoba.svg?url";

const navigation = [
  { name: "Cas clients", href: "/projects" },
  { name: "Développement sur mesure", href: "/tailor-made" },
  { name: "Renfort d'équipes", href: "/team-reinforcement" },
  { name: "Services", href: "/services" },
  { name: "Tribu", href: "/tribe" },
  { name: "Offres d'emploi", href: "/join" },
  { name: "Contact", href: "/contact" },
];

const social = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/kinoba/" },
  { name: "GitHub", href: "https://github.com/kinoba" },
  { name: "Medium", href: "https://kinoba.medium.com" },
];

const legal = [{ name: "Mentions légales", href: "/legal-mentions" }];
</script>

<template>
  <footer class="flex flex-col items-center gap-10 pt-20 lg:pt-24">
    <div class="container space-y-3 text-center">
      <img :src="logoUrl" alt="Kinoba" class="mx-auto max-w-xl h-12 md:h-16" />
      <p
        class="text-muted-foreground mx-auto max-w-xl leading-snug text-balance"
      >
        Agence de développement web sur mesure et renfort d'équipes
        informatiques, pour entreprises innovantes.
      </p>
      <p class="text-muted-foreground text-sm">
        Lyon — 7 place Ferrandière, 69003 &nbsp;·&nbsp; Paris — 94 rue du
        Temple, 75003
      </p>
      <a
        href="mailto:hello@kinoba.fr"
        class="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >hello@kinoba.fr</a
      >
    </div>

    <nav class="container flex flex-col items-center gap-4">
      <ul class="flex flex-wrap items-center justify-center gap-6">
        <li v-for="item in navigation" :key="item.name">
          <a
            :href="item.href"
            class="font-medium transition-opacity hover:opacity-75"
          >
            {{ item.name }}
          </a>
        </li>
        <li v-for="item in social" :key="item.name">
          <a
            :href="item.href"
            class="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
          >
            {{ item.name }}
            <svg
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </li>
      </ul>
      <ul class="flex flex-wrap items-center justify-center gap-6">
        <li v-for="item in legal" :key="item.name">
          <a
            :href="item.href"
            class="text-muted-foreground text-sm transition-opacity hover:opacity-75"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="text-primary mt-10 w-full md:mt-14 lg:mt-20">
      <svg
        viewBox="0 0 1570 293"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full"
      >
        <text
          x="0"
          y="270"
          font-size="300"
          font-weight="900"
          textLength="1570"
          lengthAdjust="spacingAndGlyphs"
          fill="url(#paint0_linear_59_191)"
          font-family="inherit"
        >
          Kinoba
        </text>
        <defs>
          <linearGradient
            id="paint0_linear_59_191"
            x1="785"
            y1="0"
            x2="785"
            y2="293"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="currentColor" />
            <stop offset="1" stop-color="currentColor" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </footer>
</template>
