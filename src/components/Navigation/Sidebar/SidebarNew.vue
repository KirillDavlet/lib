<template>
  <div class="app-sidebar" :class="{ 'open-menu': menuOpen }">
    <div v-for="(item, index) in items" :key="`menu-${index}`">
      <MenuItem :item="item" :size-icon="sizeIcon" />
      <transition name="dropdown">
        <div
          class="menu-dropdown"
          :style="topDropdown"
          v-if="item.expanded && !menuOpen && !breakpoint('mobile')"
        >
          <MenuItem
            v-for="(child, index) in item.items"
            :key="`menu-child-${index}`"
            :item="child"
            :parent="item.name"
            @click.native="item.expanded = false"
          />
        </div>
      </transition>
    </div>
    <div
      v-if="breakpoint('desktop')"
      class="app-sidebar__action"
      @click="$store.commit('device/toogleMenu', !menuOpen)"
    >
      <svg-icon name="double-arrow" size="24" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import MenuItem from '@/components/Navigation/Sidebar/MenuItem.vue';
import MenuItemModel from './MenuItemModel';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

@Component({
  components: { SvgIcon, MenuItem }
})
export default class SidebarNew extends Vue {
  @Prop() items!: MenuItemModel;

  get menuOpen() {
    return this.$store.state.device.menuOpen;
  }
  get topDropdown() {
    let top = 5.2;
    let left = 6;
    if (this.breakpoint('mobile')) {
      top = 5;
    } else if (this.breakpoint('tablet', 'phablet', 'laptop')) {
      left = 6.8;
      top = 6;
    }
    return {
      marginTop: `-${top}rem`,
      left: `${left}rem`
    };
  }
  get sizeIcon(): number {
    return this.breakpoint('desktop') ? 24 : 20;
  }
}
</script>

<style lang="sass">
.app-sidebar
  position: fixed
  left: 0
  top: 6rem
  height: calc(100vh - 6rem)
  width: 5.2rem
  overflow-y: auto
  overflow-x: hidden
  z-index: 10
  background: var(--bg-secondary)
  @include breakpoint(desktop)
    background: var(--bg-base)
  @include breakpoint(laptop)
    width: 6rem
  @include breakpoint(tablet)
    width: 6rem
  @include breakpoint(phablet)
    width: 6rem
  @include breakpoint(mobile)
    width: 0
  &.open-menu
    width: 25.2rem
    @include breakpoint(laptop)
      width: 28rem
    @include breakpoint(tablet)
      width: 28rem
    @include breakpoint(phablet)
      width: 28rem
    @include breakpoint(mobile)
      background:  var(--bg-secondary)
      width: 100vw
      z-index: 10
    .app-sidebar__action
      > svg
        transform: rotate(-180deg)
  &.mobile-sidebar
    width: 0
  &__action
    width: 5.2rem
    height: 5.2rem
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    bottom: 0
    left: 0
    background: var(--bg-secondary)
    border-radius: 0 1rem 1rem 0
    cursor: pointer
  &__menu-item
    display: flex
    height: 5.2rem
    padding: 0 0 0 0
    justify-content: space-between
    font-size: 1.6rem
    color: var(--font-transparent)
    cursor: pointer
    @include breakpoint(desktop)
      &.router-link-active,&.children-active
        border-radius: 0 1rem 1rem 0
    @include breakpoint(laptop)
      height: 6rem
    @include breakpoint(tablet)
      height: 6rem
    @include breakpoint(phablet)
      height: 6rem
    @include breakpoint(mobile)
      height: 5rem
    &.router-link-active,&.children-active
      background-color: var(--bg-additional)
      color: #FFFFFF
    &.is-children.router-link-active
      background-color: transparent!important
      text-decoration: underline
    .name
      display: flex
      width: auto
      min-width: 25.2rem
      .icon-wrapper
        width: 5.2rem
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        @include breakpoint(laptop)
          width: 6rem
        @include breakpoint(tablet)
          width: 6rem
        @include breakpoint(phablet)
          width: 6rem
      .title
        width: calc(100% - 5.2rem)
        display: flex
        justify-content: flex-start
        align-items: center
        font: $h2-style
        @include breakpoint(desktop)
          padding-left: 1.55rem
        @include breakpoint(tablet)
          width: calc(100% - 6rem)
          font: $h2-style-tb
        @include breakpoint(phablet)
          width: calc(100% - 6rem)
          font: $h2-style-tb
        @include breakpoint(laptop)
          width: calc(100% - 6rem)
          font: $h2-style-tb
        @include breakpoint(mobile)
          width: calc(100% - 5.2rem)
          font: $h2-style-mb
    &.is-children-open
      .name
        .title
          padding-left: 6rem
          @include breakpoint(desktop)
            padding-left: 6.75rem
          @include breakpoint(mobile)
            padding-left: 5.2rem
  .menu-dropdown
    position: fixed
    left: 6rem
    width: 30rem
    background: var(--bg-hover)
    box-shadow: 0 .8rem 1rem rgba(0, 0, 0, 0.2), 0 .6rem 3rem rgba(0, 0, 0, 0.12), 0 1.6rem 2.4rem rgba(0, 0, 0, 0.14)
    border-radius: 1rem
    display: flex
    flex-direction: column
    > div
      width: 100%
      height: 5.6rem
      display: flex
      align-items: center
      justify-content: flex-start
      .is-children
        padding-left: 2.4rem
</style>
