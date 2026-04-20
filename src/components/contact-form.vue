<script setup lang="ts">
import { ref, reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  cv: null as File | null,
});

const submitted = ref(false);
const loading = ref(false);

const subjects = [
  { value: "project", label: "J'ai un projet" },
  { value: "apply", label: "Postuler" },
  { value: "partnership", label: "Demande de partenariat" },
  { value: "other", label: "Autre" },
];

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    form.cv = input.files[0];
  }
};

const handleSubmit = async () => {
  loading.value = true;
  // Simulate submission
  await new Promise((resolve) => setTimeout(resolve, 1000));
  loading.value = false;
  submitted.value = true;
};
</script>

<template>
  <div class="max-w-xl mx-auto">
    <div v-if="submitted" class="text-center py-12">
      <p class="text-2xl font-mono font-bold mb-3">C'est dans les tuyaux !</p>
      <p class="text-gray-600">
        Merci pour ton message, nous reviendrons vers toi le plus rapidement
        possible.
      </p>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <div class="flex flex-col gap-1.5">
        <label for="name" class="text-sm font-medium"
          >Comment t'appelles-tu ?</label
        >
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          placeholder="Prénom Nom"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="email" class="text-sm font-medium"
          >Un email pour te recontacter</label
        >
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="toi@exemple.com"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="phone" class="text-sm font-medium">Quel est ton 06 ?</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          placeholder="06 XX XX XX XX"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="subject" class="text-sm font-medium"
          >La raison de ta prise de contact ?</label
        >
        <select
          id="subject"
          v-model="form.subject"
          required
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors bg-background"
        >
          <option value="" disabled>Choisir...</option>
          <option v-for="s in subjects" :key="s.value" :value="s.value">
            {{ s.label }}
          </option>
        </select>
      </div>

      <div v-if="form.subject === 'apply'" class="flex flex-col gap-1.5">
        <label for="cv" class="text-sm font-medium">Ton CV</label>
        <input
          id="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          @change="handleFileChange"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="message" class="text-sm font-medium">Ton mot doux</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="5"
          placeholder="Décris-nous ton projet ou ta demande..."
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-black text-white font-medium py-3 px-6 rounded-lg hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ loading ? "Envoi en cours..." : "Envoyer" }}
      </button>
    </form>
  </div>
</template>
