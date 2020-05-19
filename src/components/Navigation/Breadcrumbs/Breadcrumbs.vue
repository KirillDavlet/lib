<template>
  <ul class="app-breadcrumbs">
    <li
      class="app-breadcrumbs__item"
      v-for="(item, index) in _items"
      :key="index"
      :class="{ active: item.id == folderLevel }"
    >
      <a
        v-if="!item.isDotted && !item.isDivider"
        class="link"
        @click.stop="navigate(item.id)"
      >
        {{ item.name }}
      </a>
      <span v-if="item.isDotted" class="dotted">...</span>
      <span v-if="item.isDivider" class="divider">/</span>
    </li>
  </ul>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { BreadcrumbModel } from './BreadcrumbModel';

@Component
export default class BreadCrumbs extends Vue {
  @Prop() rootLevel: any;
  @Prop() folderLevel: any;
  @Prop() items!: BreadcrumbModel[];

  @Emit('navigate')
  navigate(id: any) {
    return id;
  }

  public visibleChunkSize: number = 3;

  get _items(): BreadcrumbModel[] {
    let items: BreadcrumbModel[] = this.items;
    if (this.items.length > 6) {
      const lastCount = this.items.length - this.visibleChunkSize;
      const lastItems = lastCount > 3 ? -3 : lastCount * -1;
      items = [
        ...this.items.slice(0, this.visibleChunkSize),
        new BreadcrumbModel({ isDotted: true }),
        ...this.items.slice(lastItems)
      ];
    }
    const itemsWithDivider: BreadcrumbModel[] = [];
    items.forEach((item: BreadcrumbModel, index: number) => {
      itemsWithDivider.push(item);
      if (index < items.length - 1) {
        itemsWithDivider.push(new BreadcrumbModel({ isDivider: true }));
      }
    });
    return itemsWithDivider;
  }
}
</script>
<style lang="sass" scoped>
.app-breadcrumbs
  font-size: 1.4rem
  align-items: center
  display: flex
  flex-wrap: wrap
  flex: 0 1 auto
  list-style-type: none
  margin: 0
  padding: 0
  user-select: none
  &__item
    align-items: center
    display: inline-flex
    &:nth-child(2n)
      padding: 0 .5rem
    .link
      display: inline
      color: var(--font-transparent)
      cursor: pointer
      font-size: 1em
    .divider
      font-size: 1.2em
      color: var(--font-transparent)
    .dotted
      color: var(--font-transparent)
    &.active
      .link
        color: var(--font-medium)
        text-decoration: underline
</style>
