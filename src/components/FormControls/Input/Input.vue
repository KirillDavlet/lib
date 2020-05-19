<template>
  <ValidationProvider :name="label" :rules="rules" v-slot="{ errors }">
    <div
      class="app-input"
      :class="{
        'has-focus': isFocus,
        'has-value': valueCopy,
        'search-input': type == 'search',
        'has-help': hasHelp,
        'has-error': errors.length > 0 && hasRules
      }"
    >
      <div class="app-input__form">
        <Svg-icon v-if="type == 'search'" v-bind="scgSearch" />
        <Svg-icon v-if="type == 'dropDown'" v-bind="scgSearch" />
        <input
          v-if="!type || type != 'phone'"
          :type="type == 'search' ? 'text' : type || 'text'"
          v-model="valueCopy"
          @input="input"
          @focus="focus"
          @blur="blur"
          :placeholder="type == 'search' ? $t(label) : placeholderCopy"
        />
        <the-mask
          v-if="type == 'phone'"
          type="tel"
          v-model="valueCopy"
          @input="input"
          @focus.native="focus"
          @blur.native="blur"
          :placeholder="placeholderCopy"
          mask="+c (###) ### ## ##"
          :tokens="{
            c: { pattern: /7|8/ },
            '#': { pattern: /\d/ }
          }"
          :masked="false"
        />
        <date-picker
          v-if="type == 'datetime-local' || type == 'date'"
          v-model="valueCopy"
          @focus="focus"
          @blur="blur"
        />
        <label
          class="app-input__form__label"
          v-if="type != 'search'"
          :style="{ left: type != 'search' ? '1.2rem' : '3.7rem' }"
        >
          {{ $t(label) }}
        </label>
        <div class="app-input__form__bar"></div>
      </div>
      <div class="app-input__info">
        <span class="bar-error" v-if="hasRules">
          {{ $t(errors[errors.length - 1]) }}
        </span>
        <span class="bar-help" v-if="hasHelp && !errors.length > 0">
          {{ $t(helpText) }}
        </span>
      </div>
    </div>
  </ValidationProvider>
</template>

<script lang="ts" src="./Input.ts"></script>

<style lang="sass">
.app-input
  width: 100%
  position: relative
  display: flex
  flex-direction: column
  &__form
    width: 100%
    height: 4.4rem
    border-radius: 10px 10px 0 0
    position: relative
    display: flex
    align-items: center
    &__label
      position: absolute
      top: 1.2rem
      z-index: 10
      transition: .3s ease all
      color: var(--font-transparent)
    &__bar
      position: absolute
      bottom: 0
      left: 0
      height: .2rem
      width: 100%
      background-color: var(--font-transparent)
    > input
      width: 100%
      height: 100%
      margin: 0 !important
      border: none
      padding: 1rem 1.2rem 0 1.2rem
      box-sizing: border-box
      background-color: var(--bg-input)
      border-radius: 10px 10px 0 0
      color: var(--font-active)
      font: $body-font
      z-index: 15
      &:focus,&:active
        border: none
        outline: none
  &__info
    padding: 0 1.2rem
    > span
      font: $additional-text
      color: var(--font-transparent)
  &.search-input
    .app-input__form
       input
         padding-left: 4.4rem
         padding-top: 0
  &.has-error
    .app-input__info
      .bar-error
        color: var(--error)
  &.has-focus
    .app-input__form
      &__bar:after
        content: ''
        position: absolute
        top: 0
        left: 0
        height: 100%
        width: 0
        background-color: var(--primary)
        z-index: 20
        animation: widthBar .1s ease-in-out forwards
  &.has-focus,&.has-value
    .app-input__form
      &__label
        top: .2rem
        font: $additional-text

@keyframes widthBar
  0%
    width: 0
  100%
    width: 100%
</style>
