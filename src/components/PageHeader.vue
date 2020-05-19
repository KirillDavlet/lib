<template>
  <div class="page-header">
    <h1 class="font-medium"><slot></slot></h1>
    <div class="widgets">
      <slot name="widgets" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PageHeader extends Vue {}
</script>
