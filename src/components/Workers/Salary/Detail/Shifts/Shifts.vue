<template>
  <div class="tab-content shifts-block">
    <div class="no-items" v-if="items.length == 0">Нет результатов</div>
    <div class="table-wrapper" v-else>
      <table class="table table_hover shifts-block__table">
        <thead>
          <th>Дата</th>
          <th>Заведение</th>
          <th>Должность</th>
          <th>Смена</th>
          <th>Часы</th>
          <th>Оклад</th>
          <th>Проценты</th>
        </thead>
        <tbody class="filters-block">
          <tr>
            <td colspan="7">
              <div class="filters-wrapper">
                <ButtonSort
                  :currentSortBy="sortBy"
                  sortBy="start"
                  @change="onChangeSort"
                  class="mr-10"
                >
                  по дате
                </ButtonSort>
                <Dropdown
                  :options="jobs"
                  :optionName="'name'"
                  :selected="filterJob"
                  placeholder="по должности"
                  @updateOption="filterJob = $event"
                  @cancel="filterJob = null"
                  class="mr-10"
                />
                <Dropdown
                  :options="cafes"
                  :optionName="'name'"
                  :selected="filterCafe"
                  placeholder="по заведению"
                  @updateOption="filterCafe = $event"
                  @cancel="filterCafe = null"
                  class="mr-10"
                />
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
          class="salary-item"
        >
          <tr>
            <td>{{ item.start | moment('DD.MM.YYYY') }}</td>
            <td>{{ item.cafeName }}</td>
            <td>{{ item.roleName }}</td>
            <td class="shift-time-cell">
              <div>
                {{ item.open | moment('HH:mm') }} -
                {{ item.close | moment('HH:mm') }}
              </div>
              <div class="mt-5">
                ({{ item.start | moment('HH:mm') }} -
                {{ item.end | moment('HH:mm') }})
              </div>
            </td>
            <td>{{ item.timeSummary }}</td>
            <td>{{ item.salaryAmount | currency({ fractionCount: 2 }) }}</td>
            <td>
              {{ item.salaryAmountReward | currency({ fractionCount: 2 }) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts" src="./Shifts.ts" />
