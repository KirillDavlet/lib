import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import WorkerModel from '@/models/Workers/WorkerModel';

@Component
export default class Pay extends Vue {
  @Prop() cafeId!: number;
  @Prop() worker!: WorkerModel;
  @Prop() balance!: any[];

  @Emit('fetchData')
  fetchData(): void {}

  public amount: number | null = null;
  public comment: string = '';
  public withdrawFrom: number | null = null;

  public async pay() {
    const valid = true;
    if (valid) {
      await this.$store.dispatch('salary/pay', {
        cafeId: this.cafeId,
        userId: this.worker.id,
        amount: this.amount,
        withdrawFrom: this.withdrawFrom,
        comment: this.comment
      });
      this.$store.dispatch('alert/createNotification', {
        status: 'success',
        text: 'Платеж отправлен'
      });
      this.amount = null;
      this.withdrawFrom = null;
      this.comment = '';
      //this.$validator.reset();
      this.fetchData();
    }
  }
}
