import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    breakpoint(...arg: any): boolean;
  }
}
