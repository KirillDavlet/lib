<template>
  <div class="app-navbar">
    <div class="navbar__first-wrap navbar-wrap">
      <div
        v-if="!breakpoint('desktop')"
        class="button-wrapper"
        @click="$store.commit('device/toogleMenu', !menuOpen)"
      >
        <div
          class="burger-button"
          :class="{ active: menuOpen }"
          :title="$t('Menu')"
        >
          <span class="burger-bar burger-bar--1"></span>
          <span class="burger-bar burger-bar--2"></span>
          <span class="burger-bar burger-bar--3"></span>
        </div>
      </div>
    </div>
    <div class="navbar__second-wrap navbar-wrap">
      <h3 class="title">{{ $t(title) }}</h3>
    </div>
    <div class="navbar__third-wrap navbar-wrap">
      <router-link slot="third-wrap" class="account-label" to="#" tag="div">
        <div class="avatar-icon"></div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SvgIcon from '@/components/Icons/SvgIcon.vue';
@Component({
  components: { SvgIcon }
})
export default class Navbar extends Vue {
  get menuOpen() {
    return this.$store.state.device.menuOpen;
  }
  get title() {
    return this.$route.meta.name || '';
  }
}
</script>
<style lang="sass">
.app-navbar
  position: fixed
  top: 0
  left: 0
  width: 100%
  display: flex
  align-items: center
  background: var(--bg-secondary)
  height: 6rem
  z-index: 10
  .navbar-wrap
    flex: 1
    .account-label
      justify-content: flex-end
    .title
      font-size: 1.8rem
      color: var(--font-color)
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
      max-width: 20rem
  .navbar__first-wrap
    max-width: 6rem
  .button-wrapper
    height: 6rem
    width: 6rem
    padding: 1rem
    display: flex
    justify-content: center
    align-items: center
  .link-wrapper
    width: 6.8rem
    height: 100%
    display: flex
    justify-content: center
    align-items: center
  .burger-button
    height: 100%
    width: 100%
    position: relative
    display: block
    z-index: 999
    border: 0
    border-radius: 0
    background-color: transparent
    pointer-events: all
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)
    cursor: pointer
    .burger-bar
      background-color: var(--primary)
      position: absolute
      top: 50%
      right: .6rem
      left: .6rem
      height: .2rem
      width: auto
      margin-top: -.1rem
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)
    .burger-bar--1
      -webkit-transform: translateY(-6px)
      transform: translateY(-6px)
    .burger-bar--2
      transform-origin: 100% 50%
    .burger-bar--3
      transform: translateY(6px)
    &.active
      transform: rotate(-180deg)
      .burger-bar
        background-color: var(--primary)
      .burger-bar--1
        transform: rotate(45deg)
      .burger-bar--2
        opacity: 0
      .burger-bar--3
        transform: rotate(-45deg)
</style>
