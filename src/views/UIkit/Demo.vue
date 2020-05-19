<template>
  <div class="page">
    <div class="page__content">
      <section class="section">
        <h1>Theme switch</h1>
        <Avocado :value.sync="themeDark" />
      </section>
      <section class="section">
        <h1>Breadcrumbs</h1>
        <Breadcrumbs :items="links" />
      </section>
      <section class="section">
        <h1>Buttons</h1>
        <p>
          Большие кнопки (50 px высотой) используются преимущественно для
          планшетной и мобильной версий.
        </p>
        <p>Маленькие - для десктопа.</p>
        <table width="100%">
          <tr>
            <td>
              <p>Primary small:</p>
              <button class="btn btn_primary">Обычная кнопка</button>
              <p>Secondary small:</p>
              <button class="btn btn_secondary">Вторичная кнопка</button>
              <p>Secondary small 2:</p>
              <button class="btn btn_secondary2">Кнопка-линк</button>
            </td>
            <td>
              <p>Primary big:</p>
              <button class="btn btn_primary btn__big">Обычная кнопка</button>
              <p>Secondary big:</p>
              <button class="btn btn_secondary btn__big">
                Вторичная кнопка
              </button>
              <p>Secondary big 2:</p>
              <button class="btn btn_secondary2 btn__big">Кнопка-линк</button>
            </td>
            <td>
              <p>Primary small disabled:</p>
              <button class="btn btn_primary" disabled>Обычная кнопка</button>
              <p>Secondary small disabled:</p>
              <button class="btn btn_secondary" disabled>
                Вторичная кнопка
              </button>
              <p>Secondary small 2 disabled:</p>
              <button class="btn btn_secondary2" disabled>Кнопка-линк</button>
            </td>
            <td>
              <p>Primary big disabled:</p>
              <button class="btn btn_primary btn__big" disabled>
                Обычная кнопка
              </button>
              <p>Secondary big disabled:</p>
              <button class="btn btn_secondary btn__big" disabled>
                Вторичная кнопка
              </button>
              <p>Secondary big 2 disabled:</p>
              <button class="btn btn_secondary2 btn__big" disabled>
                Кнопка-линк
              </button>
            </td>
          </tr>
        </table>
      </section>
      <section class="section">
        <h1>Tabs</h1>
        <Tabs style="height: 20rem">
          <Tab header="Таб 1">
            Контент Таб 1
          </Tab>
          <Tab header="Таб 2">
            Контент Таб 2
          </Tab>
        </Tabs>
      </section>
      <section class="section">
        <h1>Form Controls</h1>
        <Input
          label="Text input"
          type="phone"
          v-model="textInputVal"
          class="mb-20"
        />
        <Textarea v-model="textInputVal" label="Textarea" class="mb-20" />
        <Select :value.sync="selectValue" label="Select" class="mb-20">
          <option value="1">some option 1</option>
          <option value="2">some option 2</option>
        </Select>
        <Checkbox v-model="checkboxValue" label="Checkbox" class="mr-20" />
        <Radio
          value="1"
          :selectedValue.sync="radioValue"
          label="Radio 1"
          class="mr-20"
        />
        <Radio value="2" :selectedValue.sync="radioValue" label="Radio 2" />
      </section>
    </div>
  </div>
</template>

<script src="./Demo.ts"></script>
