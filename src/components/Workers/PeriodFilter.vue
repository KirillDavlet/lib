<template>
  <div class="period-filter">
    <div class="label">Период</div>
    <select v-model="periodMode" class="ml-10">
      <option value="manual">Ввести вручную</option>
      <option value="all">За все время</option>
      <option value="week">За эту неделю</option>
      <option value="month">За этот месяц</option>
      <option value="4-weeks">Последние 4 недели</option>
      <option value="year">Этот год</option>
      <option value="12-month">Последние 12 месяцев</option>
    </select>
    <div class="ml-20 mr-10">от</div>
    <Input type="date" v-model="_from" :disabled="periodMode != 'manual'" />
    <div class="ml-20 mr-10">до</div>
    <Input type="date" v-model="_to" :disabled="periodMode != 'manual'" />
    <button class="btn btn_primary ml-25" @click="periodUpdated">
      Показать
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Watch, Prop } from 'vue-property-decorator';
import moment from 'moment';
import Input from '@/components/FormControls/Input/Input.vue';

@Component({
  components: {
    Input
  }
})
export default class PeriodFilter extends Vue {
  @Prop() from!: string;
  @Prop() to!: string;
  @Prop({ default: 'manual' }) periodModeDefault!: string;

  @Emit('update:from')
  updateFrom(value: string) {
    return value;
  }
  @Emit('update:to')
  updateTo(value: string) {
    return value;
  }
  @Emit('periodUpdated')
  periodUpdated(): void {
    this.updatePeriodModeDefault();
  }
  @Emit('update:periodModeDefault')
  updatePeriodModeDefault() {
    return this.periodMode;
  }

  @Watch('periodMode')
  onPeriodModeChanged(value: string) {
    switch (value) {
      case 'manual': {
        return false;
      }
      case 'all': {
        this._to = '';
        this._from = '';
        break;
      }
      case 'week': {
        this._from = moment()
          .startOf('week')
          .format('YYYY-MM-DD');
        this._to = moment()
          .endOf('week')
          .format('YYYY-MM-DD');
        break;
      }
      case 'month': {
        this._from = moment()
          .startOf('month')
          .format('YYYY-MM-DD');
        this._to = moment()
          .endOf('month')
          .format('YYYY-MM-DD');
        break;
      }
      case '4-weeks': {
        this._from = moment()
          .subtract('weeks', 4)
          .format('YYYY-MM-DD');
        this._to = moment().format('YYYY-MM-DD');
        break;
      }
      case 'year': {
        this._from = moment()
          .startOf('year')
          .format('YYYY-MM-DD');
        this._to = moment()
          .endOf('year')
          .format('YYYY-MM-DD');
        break;
      }
      case '12-month': {
        this._from = moment()
          .subtract('month', 12)
          .format('YYYY-MM-DD');
        this._to = moment().format('YYYY-MM-DD');
        break;
      }
    }
    this.periodUpdated();
  }

  public periodMode: string = 'manual';

  public created() {
    this.periodMode = this.periodModeDefault;
  }

  get _from() {
    return this.from;
  }
  set _from(value: string) {
    this.updateFrom(value);
  }
  get _to() {
    return this.to;
  }
  set _to(value: string) {
    this.updateTo(value);
  }
}
</script>
