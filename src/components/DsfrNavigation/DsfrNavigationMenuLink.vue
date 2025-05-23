<script lang="ts" setup>
import { computed, hasInjectionContext, inject } from 'vue'

import { useRandomId } from '../../utils/random-utils'
import { registerNavigationLinkKey } from '../DsfrHeader/injection-key'
import VIcon from '../VIcon/VIcon.vue'

import type { DsfrNavigationMenuLinkProps } from './DsfrNavigation.types'

export type { DsfrNavigationMenuLinkProps }

const props = withDefaults(defineProps<DsfrNavigationMenuLinkProps>(), {
  id: () => useRandomId('menu-link'),
  icon: undefined,
  onClick: () => undefined,
  text: '',
  to: '#',
})

defineEmits<{ (event: 'toggleId', id: string): void }>()

const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'))
const dsfrIcon = computed(() => props.icon && typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const defaultScale = 2
const iconProps = computed(() => (dsfrIcon.value || !props.icon)
  ? undefined
  : (typeof props.icon === 'string')
      ? { scale: defaultScale, name: props.icon }
      : { scale: defaultScale, ...((props.icon as Record<string, string>) || {}) },
)

const useHeader = hasInjectionContext() ? inject(registerNavigationLinkKey)! : undefined
const closeModal = useHeader?.() ?? (() => {})
</script>

<template>
  <a
    v-if="isExternal"
    class="fr-nav__link"
    data-testid="nav-external-link"
    :href="(to as string)"
    @click="$emit('toggleId', id); onClick($event)"
  >
    {{ text }}
  </a>
  <RouterLink
    v-else
    class="fr-nav__link"
    data-testid="nav-router-link"
    :to="to"
    :class="{
      [String(icon)]: dsfrIcon,
    }"
    @click="closeModal(); $emit('toggleId', id); onClick?.($event)"
  >
    <VIcon
      v-if="icon && iconProps"
      v-bind="iconProps"
    />
    {{ text }}
  </RouterLink>
</template>
