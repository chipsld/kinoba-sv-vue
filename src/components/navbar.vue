<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import logoUrl from "../assets/images/logos/kinoba.svg";

const logoSrc = logoUrl.src;

type DropdownItem = {
  title: string;
  href: string;
  description: string;
};

type NavItem = {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
};

const ITEMS: NavItem[] = [
  { label: "Cas clients", href: "/projects" },
  {
    label: "Offre",
    href: "#offre",
    dropdownItems: [
      {
        title: "Développement web sur mesure",
        href: "/tailor-made",
        description:
          "Création de plateformes web sur mesure : marketplace, e-commerce, application web.",
      },
      {
        title: "Renfort d'équipes techniques",
        href: "/team-reinforcement",
        description:
          "Intégration d'experts web dans vos équipes de développement.",
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Tribu", href: "/tribe" },
  { label: "Offres d'emploi", href: "/join" },
  { label: "Blog", href: "https://kinoba.medium.com" },
  { label: "Contact", href: "/contact" },
];

const isMenuOpen = ref(false);
const openDropdown = ref<string | null>(null);
const pathname = ref("");

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  if (!isMenuOpen.value) {
    openDropdown.value = null;
  }
};

const toggleDropdown = (label: string) => {
  openDropdown.value = openDropdown.value === label ? null : label;
};

const closeMenus = () => {
  isMenuOpen.value = false;
  openDropdown.value = null;
};
</script>

<template>
  <section
    class="bg-background/70 absolute top-5 left-1/2 z-50 w-[min(90%,900px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300 lg:top-12"
  >
    <div class="flex items-center justify-between px-6 py-3">
      <a href="/" class="flex shrink-0 items-center gap-2">
        <img :src="logoSrc" alt="logo" width="94" height="18" />
      </a>

      <nav class="max-lg:hidden">
        <ul class="flex items-center gap-6">
          <li v-for="link in ITEMS" :key="link.label" class="relative">
            <div v-if="link.dropdownItems" class="group relative">
              <button
                type="button"
                class="data-[state=open]:bg-accent/50 flex items-center gap-1 bg-transparent px-1.5 text-base font-medium transition-opacity hover:opacity-75"
              >
                {{ link.label }}
                <svg
                  class="size-4 transition-transform duration-200 group-hover:rotate-90 group-focus-within:rotate-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              <div
                class="invisible absolute top-full left-1/2 mt-3 w-[400px] -translate-x-1/2 rounded-xl border bg-background p-4 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
              >
                <ul class="space-y-2">
                  <li v-for="item in link.dropdownItems" :key="item.title">
                    <a
                      :href="item.href"
                      class="group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                    >
                      <div
                        class="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <div class="text-sm leading-none font-medium">
                          {{ item.title }}
                        </div>
                        <p
                          class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                        >
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <a
              v-else
              :href="link.href"
              :class="[
                'relative bg-transparent px-1.5 text-base font-medium transition-opacity hover:opacity-75',
                pathname === link.href ? 'text-muted-foreground' : '',
              ]"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div
      :class="[
        'bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden',
        isMenuOpen
          ? 'visible translate-y-0 opacity-100'
          : 'invisible -translate-y-4 opacity-0',
      ]"
    >
      <nav class="divide-border flex flex-1 flex-col divide-y">
        <template v-for="link in ITEMS" :key="link.label">
          <div v-if="link.dropdownItems" class="py-4 first:pt-0 last:pb-0">
            <button
              type="button"
              class="text-foreground flex w-full items-center justify-between text-base font-medium"
              @click="toggleDropdown(link.label)"
            >
              {{ link.label }}
              <svg
                :class="[
                  'size-4 transition-transform duration-200',
                  openDropdown === link.label ? 'rotate-90' : '',
                ]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <div
              :class="[
                'overflow-hidden transition-all duration-300',
                openDropdown === link.label
                  ? 'mt-4 max-h-[1000px] opacity-100'
                  : 'max-h-0 opacity-0',
              ]"
            >
              <div class="bg-muted/50 space-y-3 rounded-lg p-4">
                <a
                  v-for="item in link.dropdownItems"
                  :key="item.title"
                  :href="item.href"
                  class="hover:bg-accent group block rounded-md p-2 transition-colors"
                  @click="closeMenus"
                >
                  <div
                    class="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <div class="text-primary font-medium">
                      {{ item.title }}
                    </div>

                    <p class="text-muted-foreground mt-1 text-sm">
                      {{ item.description }}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a
            v-else
            :href="link.href"
            :class="[
              'text-foreground hover:text-foreground/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0',
              pathname === link.href ? 'text-muted-foreground' : '',
            ]"
            @click="closeMenus"
          >
            {{ link.label }}
          </a>
        </template>
      </nav>
    </div>
  </section>
</template>
