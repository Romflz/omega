<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
    <ul class="flex justify-around items-center h-16">
      <li v-for="item in menuStore.menuItems" :key="item.id">
        <router-link
          :to="item.route"
          @click="menuStore.setActive(item.id)"
          class="flex flex-col items-center gap-1 p-2"
          :class="menuStore.activeId === item.id ? 'text-blue-500' : 'text-gray-500'"
        >
          <component :is="item.icon" v-if="item.icon" class="w-6 h-6" />
          <span class="text-xs">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
