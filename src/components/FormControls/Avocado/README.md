##Компонент Avocado!

###вызов компонента:
```vue
<Avocado
  classes=""
  :disabled="avacadoDisabled"
  :value.sync="valueAvacado"
/>
```
###Props:
    value    [Boolean] - вкл/выкл
    classes  [String]  - добавляемые классы
    disabled [Boolean] - заблокировать
###Return
    value.sync [v-model] - связь с родительским компонентом
    