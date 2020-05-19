<template>
  <div class="tab-content pay-block">
    <div class="column-list__header">Выдача зарплаты</div>
    <div class="pay-content-inner">
      <div class="column-list__item">
        <div class="input-group">
          <label>Долг по ЗП</label>
          <div class="wrapper-input">
            <span class="salary-balance">{{
              worker.salaryBalance | currency
            }}</span>
          </div>
        </div>
      </div>
      <div class="column-list__item">
        <div class="input-group">
          <label>Кому выдать</label>
          <div class="wrapper-input">{{ worker.fullName }}</div>
        </div>
      </div>
      <div class="column-list__item">
        <div class="input-group">
          <label>Сколько выдать</label>
          <div class="wrapper-input">
            <input
              type="number"
              v-model.number="amount"
              data-vv-scope="pay"
              name="сумма"
              placeholder="Введите сумму"
            />
          </div>
        </div>
      </div>
      <div class="column-list__item">
        <div class="input-group">
          <label>Откуда списать</label>
          <div class="wrapper-input">
            <select v-model="withdrawFrom" name="откуда списать">
              <option :value="null"></option>
              <option
                v-for="item in balance"
                :key="`balance-${item.id}`"
                :value="item.id"
              >
                {{ item.whereMoney }} - {{ item.amount | currency }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="column-list__item">
        <div class="input-group input-group__textarea">
          <label>Комментарий</label>
          <div class="wrapper-input">
            <textarea
              rows="5"
              v-model="comment"
              name="комментарий"
              placeholder="Аванс/зарплата"
            />
          </div>
        </div>
      </div>
      <div class="pay-actions mt-15">
        <button class="btn btn_primary" @click="pay">Выдать деньги</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Pay.ts" />
