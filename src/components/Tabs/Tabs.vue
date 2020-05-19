<template>
  <div class="app-tabs">
    <div class="app-tabs__header">
      <div
        class="item"
        :class="{ active: index == activeTabIndex }"
        v-for="(item, index) in tabs"
        :key="`tab-header-${index}`"
        :ref="`tab-header-${index}`"
        @click="setActiveTab(index)"
      >
        {{ $t(item.header) }}
      </div>
    </div>
    <!-- <div
      class="ink-bar"
      :style="{ width: `${tabWidth}px`, left: `${inkBarLeftOffset}px` }"
    ></div> -->
    <div class="app-tabs__content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import Tab from './Tab.vue';

@Component({
  name: 'Tabs'
})
export default class Tabs extends Vue {
  @Emit('change')
  change(value: any) {
    return value;
  }

  public tabs: any[] = [];
  public tabWidth: number = 0;
  private isMounted: boolean = false;

  public mounted() {
    this.tabs = this.$children;
    this.setActiveTab(0);
  }

  public setActiveTab(index: number) {
    this.tabs.forEach((tab: Tab, indexTab: number) => {
      tab.setActive(indexTab === index ? true : false);
    });
    if (this.activeTab) {
      this.change({
        index,
        name: this.activeTab.name
      });
    }
  }

  get inkBarLeftOffset() {
    return this.activeTabIndex ? this.tabWidth * this.activeTabIndex : 0;
  }
  get activeTabIndex() {
    return this.tabs.findIndex((i: Tab) => i.active) | 0;
  }
  get activeTab(): Tab | undefined {
    return this.tabs.find((i: Tab) => i.active);
  }
}
</script>
<style lang="sass">
.app-tabs
  height: 100%
  &__header
    display: flex
    width: 100%
    height: 5.2rem
    background-color: var(--bg-secondary)
    border-radius: 1rem 1rem 0 0
    @include breakpoint(tablet)
      height: 6rem
    @include breakpoint(mobile)
      height: 6rem
    .item
      padding: 0 2rem
      display: flex
      align-items: center
      font: $h2-style
      /*transition: all .25s*/
      color: var(--font-transparent)
      cursor: pointer
      user-select: none
      @include breakpoint(tablet)
        font: $h2-style-tb
      @include breakpoint(mobile)
        font: $h2-style-mb
      &.active, &.active:hover
        background-color: var(--bg-hover)
        color: var(--font-active)
        text-decoration: underline
        cursor: initial
        border-radius: 10px 10px 0 0
        position: relative
        &:before,&:after
          content: ''
          display: block
          position: absolute
          width: 14px
          height: 15px
        &:not(:first-child)
          &:before
            right: 100%
            bottom: 0
            background-image: radial-gradient(circle at 0 0, transparent 14px, var(--bg-hover) 15px)
          &:after
            left: 100%
            bottom: 0
            background-image: radial-gradient(circle at 100% 0, transparent 14px, var(--bg-hover) 15px)
        &:first-child
          &:after
            left: 100%
            bottom: 0
            background-image: radial-gradient(circle at 100% 0, transparent 14px, var(--bg-hover) 15px)
      &:hover
        text-decoration: underline
        color:  var(--font-color)
  &__content
    position: relative
    width: 100%
    height: calc(100% - 5rem)
    background-color: var(--bg-hover)
    color:  var(--font-color)
    border-radius: 0 0 10px 10px
    .app-tab
      position: absolute
      width: 100%
      height: 100%
      overflow-y: auto
      padding: 2rem
  .ink-bar
    position: relative
    height: 0.2rem
    will-change: left
    transition: all .5s cubic-bezier(.35,0,.25,1)
    background-color: var(--primary)
</style>
