import { Component, Vue } from 'vue-property-decorator';
import { Moment } from 'moment';
import moment from 'moment';

@Component
export default class DateTimeMixin extends Vue {
  public isSameDay(one: string, two: string) {
    return moment(one).isSame(two, 'day');
  }
}
