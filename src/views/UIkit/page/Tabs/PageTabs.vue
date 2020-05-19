<template>
  <div class="page">
    <div class="views-tabs">
      <div class="views-tabs__settings">
        <div class="views-tabs__settings-title mb-20">
          <h1>{{ $t('TabsLabel') }}</h1>
        </div>
        <expand-list>
          <img src="../../../../../public/readme/Tabs.png" />
        </expand-list>
      </div>
      <div class="views-tabs__content">
        <Tabs style="height: 20rem">
          <Tab
            v-for="(el, i) in dataTabs"
            :key="`tab-${i}`"
            :header="`tab-${i + 1}`"
          >
            {{ el }}
          </Tab>
        </Tabs>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Tabs from '@/components/Tabs/Tabs.vue';
import Tab from '@/components/Tabs/Tab.vue';
import ExpandList from '@/components/ExpandList/ExpandList.vue';

@Component({
  components: {
    ExpandList,
    Tab,
    Tabs
  }
})
export default class pageTabs extends Vue {
  public dataTabs: string[] = [
    'Смысл жизни, следовательно, творит данный закон внешнего мира. Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты.',
    'Сомнение рефлектирует естественный закон исключённого третьего.. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты.',
    'Сомнение рефлектирует естественный закон исключённого третьего.. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты.',
    'Сомнение рефлектирует естественный закон исключённого третьего.. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты.',
    ''
  ];
}
</script>

<style lang="sass">
.views-tabs
  width: 100%
  height: auto
  display: flex
  justify-content: flex-start
  align-items: flex-start
  flex-direction: column
  padding: .75rem
  &__content
   width: 100%
</style>
