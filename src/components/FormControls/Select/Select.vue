<template>
  <div
    class="app-select"
    :class="{
      'has-focus': isFocus,
      'has-value': valueCopy,
      'has-error': hasError
    }"
  >
    <div class="input-group">
      <div class="wrapper-input">
        <select
          v-model="valueCopy"
          @focus="focus"
          @blur="blur"
          @change="change"
          :placeholder="placeholderCopy"
        >
          <slot />
        </select>
      </div>
    </div>
    <span class="bar"></span>
    <label>{{ label }}</label>
  </div>
</template>
<script lang="ts" src="./Select.ts" />
<style lang="sass">
.app-select
  width: 100%
  position: relative
  display: flex
  flex-direction: column
  justify-content: flex-end
  height: 5rem
  background-color: var(--bg-input)
  &:-internal-autofill-selected
    background-color: var(--bg-input) !important
  &.has-focus,&.has-value
    label
      top: 0
      font-size: 1rem
      color: var(--primary)
      opacity: 1
  &.has-focus
    .bar:before
      width: 100%
    input
      color: var(--font-color) !important
  &.has-value
    input
      color: var(--font-active) !important
  &.has-error
    label
      color: var(--error)
    .bar
      &:before
        background: var(--error)
  label
    color: var(--font-active)
    font-size: 1.4rem
    font-weight: normal
    position: absolute
    pointer-events: none
    left: 1.6rem
    top: 1.5rem
    transition: .3s ease all
    max-width: 30rem
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
    opacity: .6
  .bar
    position: relative
    display: block
    width: 100%
    &:before
      content: ''
      height: .2rem
      width: 0
      bottom: 0
      position: absolute
      background: var(--primary)
      transition: .3s ease all
      left: 0%
  .input-group
    display: flex
    align-items: baseline
    position: relative
    height: 100%
    .wrapper-input
      display: flex
      width: 100%
      height: 100%
      select
        height: 100%
        width: 100%
        background: $svg-select-arrow
        background-repeat: no-repeat
        background-position: right 1rem center
        padding-right: 3rem
        padding-left: 1.5rem
        font-size: 1.6rem
        outline: none
        border: none
        color: var(--font-active)
        -webkit-appearance: none
        &:focus
          background: $svg-select-arrow_revert
          background-repeat: no-repeat
          background-position: right 1rem center
          background-color: var(--bg-input)
          padding-right: 3rem
          outline: none
</style>
