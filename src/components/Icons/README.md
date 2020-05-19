##Компонент иконка!

###вызов компонента:
```vue
<svg-icon
  :name="name"
  :size="size"
  :stroke-width="strokeWidth"
  :color="color"
  :hover-color="colorHover"
  style="{:::style}"
/>
```
###обязательные параметры:
    - name: имя иконки, Например iconAccount вызываеться account || Account
###необязательные параметры ( имееться стандартное значение ):
    - title String: подсказка ( default )
    - titleF Boolean: ( флаг отображения подсказки ), default true
    - size Number: размер иконки (width, height), так жен можно и отдельно прокинуть width, height 
    - stroke-width Number: ширина обводки иконки
    - color String: цвет иконки
    - hover-color String: цвет при наведении      
    
>Для добавления дополнительных стилей, просто прокинуть их    
    