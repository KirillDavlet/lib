<template>
  <div
    class="app-textarea"
    :class="{
      'has-focus': isFocus,
      'has-value': valueCopy,
      'has-error': hasError,
      'search-input': type == 'search'
    }"
  >
    <div class="input-group">
      <div class="wrapper-input">
        <textarea
          v-if="!type || type != 'phone'"
          v-model="valueCopy"
          @input="input"
          @focus="focus"
          @blur="blur"
          resize="none"
          :placeholder="placeholderCopy"
          :maxlength="length && length >= 0 ? length : false"
        />
      </div>
    </div>
    <span class="bar"></span>
    <label>{{ $t(label) }}</label>
    <div class="textarea-length" v-if="length && length >= 0">
      <span>{{ symbolLength }} / {{ length }}</span>
    </div>
  </div>
</template>
<script lang="ts" src="./Textarea.ts" />
<style lang="sass">
.app-textarea
  width: 100%
  position: relative
  display: flex
  flex-direction: column
  justify-content: flex-end
  height: 10rem
  background-color: var(--bg-input)
  border-radius: 1rem 1rem 0 0
  &:-internal-autofill-selected
    background-color: var(--bg-input) !important
  &.has-focus,&.has-value
    label
      top: .2rem
      font-size: 1rem
  &.has-focus
    .bar:before
      background: var(--primary)
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
      width: 100%
      bottom: 0
      position: absolute
      background: var(--font-transparent)
      /*transition: .3s ease all*/
      left: 0
  .input-group
    display: flex
    align-items: baseline
    position: relative
    .wrapper-input
      display: flex
      width: 100%
      textarea
        margin-top: 2rem
        margin-bottom: .5rem
        padding: 0 1.6rem
        display: flex
        width: 100%
        height: 7rem
        max-height: 7rem
        background: none
        color: var(--font-active)
        font-size: 1.6rem
        display: block
        border: none
        border-radius: 0
        &:focus
          outline: none
          color: var(--font-active) !important
  .textarea-length
    position: absolute
    right: 0
    bottom: -2rem
    > span
      font: $additional-text
      color: var(--font-transparent)
</style>
