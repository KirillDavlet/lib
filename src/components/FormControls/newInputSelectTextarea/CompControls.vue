<template>
  <div class="form-controls">
    <div class="form-controls-container"></div>
  </div>
</template>

<script lang="ts"></script>
<style lang="sass">
.form-controls
  width: 300px
  display: flex
  flex-direction: column
  height: auto
  border-radius: 10px 10px 0 0
  &-container
    width: 100%
    min-height: 44px
    position: relative
    &:after
      content: ''
      width: 100%
      height: .2rem
      background: var(--font-transparent)
      transition: .3s ease all
      position: absolute
      left: 0
      bottom: 0
  &-message
    width: 100%
    height: 10px
</style>
