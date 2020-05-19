import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Buttons/Button/Button.vue';
import SvgIcon from '@/components/Icons/SvgIcon.vue';
import Input from '@/components/FormControls/Input/Input.vue';
import Textarea from '@/components/FormControls/Textarea/Textarea.vue';
import Select from '@/components/FormControls/Select/Select.vue';
import Small from '@/components/FormControls/Small/Small.vue';
import Checkbox from '@/components/FormControls/Checkbox/Checkbox.vue';
import Radio from '@/components/FormControls/Radio/Radio.vue';
import NewSelect from '@/components/FormControls/Select/NewSelect.vue';
import Avocado from '@/components/FormControls/Avocado/Avocado.vue';
import { iconsName } from '@/components/Icons/itemsIcon';

@Component({
  name: 'FormElements.vue',
  components: {
    SvgIcon,
    Button,
    Input,
    Textarea,
    Select,
    Small,
    Checkbox,
    Radio,
    NewSelect,
    Avocado
  }
})
export default class FormElements extends Vue {
  public variableButton = ['primary', 'secondary', 'secondary2'];
  public icons: Boolean = false;
  public selectIcons: String = 'account';
  public big: Boolean = false;
  public disabled: Boolean = false;
  public label: String = 'пользовательская кнопка';
  public textInputVal: String = '';
  public textTextarea: String = '';
  public textareaLength: number = 10;
  public flagTextareaLength: boolean = false;
  public selectValueNew: any = null;
  public selectSmall: boolean = false;
  public selectSmallValue: any = 0;
  public smallRight: boolean = false;
  public smallLabel: boolean = false;
  public dataSelectNew: any = ['rus', 'eng'];
  public checkboxValue: boolean = false;
  public radioValue: number = 1;
  public test: boolean = false;
  public InputHelp = false;
  public InputError = false;
  public valueAvacado = true;
  public avacadoDisabled = false;
  public inputsVariable = [
    {
      label: 'Text input',
      type: '',
      helpText: 'введите четное число',
      errorText: 'не правильный формат'
    },
    {
      label: 'Text search',
      type: 'search',
      helpText: 'поиск',
      errorText: 'некоректный формат ввода'
    }
  ];

  get IconsName(): string[] {
    return iconsName;
  }
  public valueParent(data: any) {
    this.selectValueNew = data;
  }
}
