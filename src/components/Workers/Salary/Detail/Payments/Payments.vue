<template>
  <div class="tab-content payments-block">
    <div class="no-items" v-if="items.length == 0">Нет результатов</div>
    <div class="table-wrapper" v-else>
      <table class="table table_hover">
        <thead>
          <th>Дата</th>
          <th>Время</th>
          <th>Тип операции</th>
          <th>Откуда</th>
          <th>Сумма</th>
          <th>Баланс</th>
          <th>Комментарий</th>
        </thead>
        <tbody class="filters-block">
          <tr>
            <td colspan="6">
              <div class="filters-wrapper">
                <ButtonSort
                  :currentSortBy="sortBy"
                  sortBy="createdAt"
                  @change="onChangeSort"
                  class="mr-10"
                >
                  по дате
                </ButtonSort>
                <div class="btn-sort reset" @click="resetFilters">
                  <span class="wrapper-text"> сбросить фильтры </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          v-for="(item, index) in _items"
          :key="`worker-${index}`"
          class="payment-item"
        >
          <tr>
            <td>{{ item.createdAt | moment('DD.MM.YYYY') }}</td>
            <td>{{ item.createdAt | moment('HH:mm') }}</td>
            <td>{{ item.typeName }}</td>
            <td>{{ item.withdrawFrom }}</td>
            <td :class="item.type">
              {{ item.type == 'income' ? '+' : '' }}
              {{ item.amount | currency({ fractionCount: 2 }) }}
            </td>
            <td>
              {{
                item.salaryUserBalanceAfterTransaction
                  | currency({ fractionCount: 2 })
              }}
            </td>
            <td>{{ item.comment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts" src="./Payments.ts" />
