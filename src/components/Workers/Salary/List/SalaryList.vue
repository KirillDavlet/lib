<template>
  <div class="salary-list">
    <!-- PERIOD FILTER -->
    <PeriodFilter
      :from.sync="_from"
      :to.sync="_to"
      :periodModeDefault.sync="_periodMode"
      @periodUpdated="periodUpdated"
    />

    <div class="no-items" v-if="items.length == 0">Нет результатов</div>

    <!-- FILTERS -->
    <div class="table-wrapper" v-else>
      <table class="table table_hover">
        <thead>
          <th>
            <template v-if="!byUserMode">
              Сотрудники
            </template>
            <template v-else>
              Кафе
            </template>
          </th>
          <th>Отработано/смены</th>
          <th>Оклад</th>
          <th>Процент от продаж</th>
          <th>Выплачено</th>
          <th></th>
        </thead>
        <tbody class="filters-block">
          <tr>
            <td colspan="6">
              <div class="filters-wrapper">
                <ButtonSort
                  :currentSortBy="sortBy"
                  sortBy="fullName"
                  @change="onChangeSort"
                  class="mr-10"
                >
                  по алфавиту
                </ButtonSort>

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
        <!-- FILTERS END -->

        <!-- LIST -->
        <tbody v-for="cafe in cafes" :key="`cafe-${cafe.id}`">
          <tr v-if="!byUserMode">
            <td colspan="6" class="cafe-name-row">{{ cafe.name }}</td>
          </tr>
          <tr
            v-for="(item, index) in items.filter(i => i.cafeId == cafe.id)"
            :key="`worker-${index}`"
            class="salary-item"
            @click="goDetail({ cafeId: cafe.id, userId: item.userId })"
          >
            <td class="name-cell" v-if="!byUserMode">
              <div class="name-wrapper">
                <div class="icon-wrapper"><div class="icon icon_person" /></div>
                <div class="name-block">
                  <div class="name">{{ item.fullName }}</div>
                  <div class="job">{{ item.jobName }}</div>
                </div>
              </div>
            </td>
            <td v-else>{{ cafe.name }}</td>
            <td>{{ item.timeSummary }}/{{ item.workedShifts }}</td>
            <td>{{ item.sumSalaryAmount | currency({ fractionCount: 2 }) }}</td>
            <td>
              {{ item.sumSalaryAmountReward | currency({ fractionCount: 2 }) }}
            </td>
            <td>
              {{ item.sumSalaryHistoryAmount | currency({ fractionCount: 2 }) }}
            </td>
            <td class="action-cell">
              <div class="icon-wrapper">
                <router-link
                  :to="{
                    name: 'workers-salary-detail',
                    params: { id: item.userId }
                  }"
                  class="icon icon_arrow-horiz"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts" src="./SalaryList.ts" />
