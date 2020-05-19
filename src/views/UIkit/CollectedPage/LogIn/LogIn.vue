<template>
  <div class="log-in">
    <div class="log-in__title">
      <span>Вход в Data-CRM </span>
    </div>
    <div class="log-in__form">
      <Input
        v-model="email"
        :label="$t('Введите email')"
        rules="required|email"
      />
      <Input v-model="password" :label="$t('Введите пароль')" />
      <div class="log-in__form-button">
        <Button type="secondary" :label="$t('registration')" big />
        <Button type="primary" :label="$t('entrance')" big />
        <Button type="secondary2" :label="`${$t('ForgotYourPassword')}?`" />
      </div>
      <div class="log-in__form-social">
        <div class="log-in__form-social__title">
          <span>{{ $t('authorizationThroughSocialNetworks') }}:</span>
        </div>
        <div class="log-in__form-social__actions">
          <svg-icon name="GPlus" />
          <svg-icon name="Facebook" />
          <svg-icon name="VK" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Input from '@/components/FormControls/Input/Input.vue';
import Button from '@/components/Buttons/Button/Button.vue';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

@Component({
  components: {
    Input,
    Button,
    SvgIcon
  }
})
export default class LogIn extends Vue {
  public email: string = '';
  public password: string = '';
}
</script>

<style lang="sass">
.log-in
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
</style>
