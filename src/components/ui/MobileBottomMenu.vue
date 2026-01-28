<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'

const menuStore = useMenuStore()
const route = useRoute()

const activeIndex = computed(() => {
  const index = menuStore.menuItems.findIndex((item) => item.route === route.path)
  return index >= 0 ? index : 0
})

const isActive = (itemRoute: string) => route.path === itemRoute

const animatingId = ref<number | null>(null)

watch(activeIndex, () => {
  const activeItem = menuStore.menuItems[activeIndex.value]
  if (activeItem) {
    animatingId.value = activeItem.id
    setTimeout(() => {
      animatingId.value = null
    }, 300)
  }
})
</script>

<template>
  <nav class="fixed bottom-4 left-1/2 -translate-x-1/2">
    <div class="bg-surface border border-white/10 rounded-2xl px-4 py-3 shadow-lg w-84">
      <ul class="flex justify-around items-center relative">
        <div
          class="absolute top-1/2 -translate-y-1/2 h-11 bg-white rounded-xl transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          :style="{
            width: `calc(${100 / menuStore.menuItems.length}% - 8px)`,
            left: `calc(${(activeIndex * 100) / menuStore.menuItems.length}% + 4px)`,
          }"
        />

        <li v-for="item in menuStore.menuItems" :key="item.id" class="flex-1 z-10">
          <router-link
            :to="item.route"
            class="flex items-center justify-center py-2 transition-colors duration-200"
            :class="isActive(item.route) ? 'text-background' : 'text-white/40 hover:text-white/60'"
          >
            <component
              :is="item.icon"
              v-if="item.icon"
              class="w-5 h-5 transition-all duration-200"
              :class="animatingId === item.id ? 'animate-fade-up' : ''"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.3s ease-out;
}

@keyframes fadeUp {
  0% {
    opacity: 0.5;
    transform: translateY(3px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
