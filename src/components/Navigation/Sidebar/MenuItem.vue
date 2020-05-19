<template>
  <div class="app-sidebar__menu-group">
    <div
      class="app-sidebar__menu-item"
      :class="{
        'router-link-active': item.active,
        disabled: item.disabled,
        expanded: item.expanded,
        active: item.active,
        'children-active': item.childsActive,
        'is-children': parent,
        'is-children-open': parent && menuOpen
      }"
      @click="routeGo"
    >
      <div class="name">
        <div class="icon-wrapper" v-if="item.icon">
          <svg-icon
            :size="sizeIcon"
            :name="item.icon"
            :title="$t(item.name)"
            :color="item.active || item.childsActive ? 'white' : '#5A81EA'"
          />
        </div>
        <div class="title">
          {{ item.name }}
        </div>
      </div>
    </div>
    <transition-expand>
      <div v-show="item.expanded && menuOpen">
        <MenuItem
          v-for="(child, index) in item.items"
          :key="`menu-child-${index}`"
          :item="child"
          :parent="item.name"
        />
      </div>
    </transition-expand>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import MenuItemModel from './MenuItemModel';
import TransitionExpand from '@/components/Transitions/TransitionExpand.vue';
import menuItem from './MenuItem.vue';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

@Component({
  name: 'MenuItem',
  components: {
    SvgIcon,
    TransitionExpand,
    MenuItem: menuItem
  }
})
export default class MenuItem extends Vue {
  @Prop() item!: MenuItemModel;
  @Prop() parent!: string;
  @Prop() sizeIcon!: number;

  @Watch('isChildsActive')
  onIsChildsActiveChanged(value: boolean) {
    this.item.childsActive = value;
  }
  @Watch('routeName')
  onRouteNameChanged(value: any) {
    if (this.openChildren) {
      this.item.expanded = false;
    }
    this.item.active = this.routeName == this.item.routeName;
  }

  public openChildren: boolean = false;

  public created() {
    this.item.active = this.routeName == this.item.routeName;
  }

  public routeGo() {
    if (this.item.disabled) {
      return false;
    }
    if (this.item.items.length) {
      this.item.expanded = !this.item.expanded;
      // if (!this.parent || this.parent == '') {
      //   this.item.expanded = !this.item.expanded;
      // }
      // this.openChildren = this.item.expanded;
    } else {
      this.$router.push({ name: this.item.routeName });
    }
  }

  // :TODO не очкень понял каким образом проиходит работа
  get isChildsActive() {
    return this.item.items.some((i: MenuItemModel) => {
      return i.active || i.childsActive;
    });
  }
  get routeName() {
    return this.$route.name;
  }
  get menuOpen() {
    return this.$store.state.device.menuOpen;
  }
}
</script>
