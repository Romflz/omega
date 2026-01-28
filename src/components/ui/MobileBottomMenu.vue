<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { useRoute } from 'vue-router'
import { computed, watch, nextTick, useTemplateRef } from 'vue'
import gsap from 'gsap'

const menuStore = useMenuStore()
const route = useRoute()

const activeIndex = computed(() => {
  const index = menuStore.menuItems.findIndex((item) => item.route === route.path)
  return index >= 0 ? index : 0
})

const isActive = (itemRoute: string) => route.path === itemRoute

// useTemplateRef for v-for gives an array
const iconRefs = useTemplateRef<HTMLElement[]>('icon')

watch(activeIndex, async () => {
  await nextTick()
  const iconEl = iconRefs.value?.[activeIndex.value]

  if (iconEl) {
    gsap.fromTo(
      iconEl,
      { y: 4, opacity: 0.5, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' },
    )
  }
})
</script>

<template>
  <nav class="fixed bottom-4 left-1/2 -translate-x-1/2">
    <div class="bg-surface border border-text-muted/20 rounded-2xl px-4 py-3 shadow-lg w-84">
      <ul class="flex justify-around items-center relative">
        <div
          class="absolute top-1/2 -translate-y-1/2 h-11 bg-white rounded-xl transition-all duration-normal ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          :style="{
            width: `calc(${100 / menuStore.menuItems.length}% - 8px)`,
            left: `calc(${(activeIndex * 100) / menuStore.menuItems.length}% + 4px)`,
          }"
        />

        <li v-for="item in menuStore.menuItems" :key="item.id" class="flex-1 z-10">
          <router-link
            :to="item.route"
            class="flex items-center justify-center py-2 transition-colors duration-fast"
            :class="
              isActive(item.route) ? 'text-background' : 'text-text-muted hover:text-text-secondary'
            "
          >
            <div ref="icon" class="w-5 h-5">
              <component :is="item.icon" v-if="item.icon" class="w-full h-full" />
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
