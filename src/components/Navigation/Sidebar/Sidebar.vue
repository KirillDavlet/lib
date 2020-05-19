<template>
  <div class="app-sidebar">
    <MenuItem
      v-for="(item, index) in items"
      :key="`menu-${index}`"
      :item="item"
    />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import MenuItemModel from './MenuItemModel';
import MenuItem from './MenuItem.vue';

@Component({
  name: 'Sidebar',
  components: {
    MenuItem
  }
})
export default class Sidebar extends Vue {
  @Prop() items!: MenuItemModel;
}
</script>
<style lang="sass">
.app-sidebar
  position: fixed
  left: 0
  top: 6rem
  height: calc(100vh - 6rem)
  z-index: 1000
  width: 5rem
  background-color: var(--bg-additional)
  overflow-y: auto
  overflow-x: hidden
  &__menu-item
    display: flex
    height: 6rem
    padding: 0 0 0 0
    justify-content: space-between
    border-bottom: 1px solid var(--bg-secondary)
    background-color: var(--bg-base)
    font-size: 1.6rem
    &.expanded
      background-color: var(--bg-additional)
      .icon
        @extend .hover !optional
      .icon_arrow-horiz
        transform: rotate(270deg)
    &.active
      background-color: var(--bg-additional)
      .name
        color: white
      .icon
        @extend .hover !optional
    .name
      display: flex
      justify-content: flex-start
      align-items: center
      color: var(--font-color)
    .icon_arrow-horiz
      transform: rotate(180deg)
    .icon-wrapper
      height: 6rem
      width: 6rem
    .icon
        margin-right: 0
        height: 6rem
        width: 6rem
    &.disabled
      opacity: .5

  //BackDrop
  &__backdrop
    background-color: var(--bg-additional)
    opacity: 0.7
    width: 100%
    height: calc(100vh - 6rem)
    position: fixed
    top: 6rem
    left: 0
    cursor: pointer
    z-index: 999
</style>
