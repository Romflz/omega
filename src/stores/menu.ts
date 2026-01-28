import { reactive, ref, type Component } from 'vue'
import { defineStore } from 'pinia'

import HomeIcon from '@/assets/icons/menu/home-icon.svg?component'
import CardsIcon from '@/assets/icons/menu/cards-icon.svg?component'
import StocksIcon from '@/assets/icons/menu/stocks-icon.svg?component'
import AnalyticsIcon from '@/assets/icons/menu/analytics-icon.svg?component'

interface MenuItem {
  id: number
  name: string
  icon: Component
  route: string
}

export const useMenuStore = defineStore('menu', () => {
  const activeId = ref(1)

  const menuItems = reactive<MenuItem[]>([
    {
      id: 1,
      name: 'Home',
      icon: HomeIcon,
      route: '/',
    },
    {
      id: 2,
      name: 'Stocks',
      icon: StocksIcon,
      route: '/stocks',
    },
    {
      id: 3,
      name: 'Analytics',
      icon: AnalyticsIcon,
      route: '/analytics',
    },
    {
      id: 4,
      name: 'Cards',
      icon: CardsIcon,
      route: '/cards',
    },
  ])

  const setActive = (id: number) => {
    activeId.value = id
  }

  return { menuItems, activeId, setActive }
})
