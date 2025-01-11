import type { RouteLocationRaw } from 'vue-router'

export type DsfrSideMenuListItemProps = { active?: boolean }

export type DsfrSideMenuProps = {
  buttonLabel?: string
  id?: string
  sideMenuListId?: string
  collapseValue?: string
  menuItems?: DsfrSideMenuListItemProps[]
  headingTitle?: string
  titleTag?: string
  focusOnExpanding?: boolean
}

export type DsfrSideMenuButtonProps = {
  active?: boolean
  expanded?: boolean
  controlId: string
}

export type DsfrSideMenuListProps = {
  id: string
  collapsable?: boolean
  expanded?: boolean
  menuItems?: (
    DsfrSideMenuListItemProps & Partial<DsfrSideMenuListProps & { to?: RouteLocationRaw, text?: string }>
    & { menuItems?: (DsfrSideMenuListItemProps & Partial<DsfrSideMenuListProps & { to?: RouteLocationRaw, text?: string }>)[] }
  )[]
  focusOnExpanding?: boolean
}
