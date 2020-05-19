<template>
  <div class="salary-detail">
    <PeriodFilter
      :from.sync="_from"
      :to.sync="_to"
      :periodModeDefault.sync="_periodMode"
      @periodUpdated="periodUpdated"
    />
    <div class="worker-detail">
      <div class="tabs">
        <div
          class="tab"
          :class="{ active: activeView == 'payments' }"
          @click="activeView = 'payments'"
        >
          История
        </div>
        <div
          v-if="availableViews.includes('pay')"
          class="tab"
          :class="{ active: activeView == 'pay' }"
          @click="activeView = 'pay'"
        >
          Выплата ЗП
        </div>
        <div
          class="tab"
          :class="{ active: activeView == 'shifts' }"
          @click="activeView = 'shifts'"
        >
          Смены
        </div>
      </div>
    </div>
    <div class="tabs-content-wrapper">
      <transition-group name="fade">
        <!-- PAYMENTS -->
        <Payments
          v-if="activeView == 'payments'"
          key="payments"
          :items="payments"
        />

        <!-- PAY -->
        <Pay
          v-if="activeView == 'pay'"
          key="pay"
          :cafeId="cafeId"
          :worker="worker"
          :balance="balance"
          @fetchData="periodUpdated"
        />

        <!-- SHIFTS -->
        <Shifts v-if="activeView == 'shifts'" key="shifts" :items="shifts" />
      </transition-group>
    </div>
  </div>
</template>
<script lang="ts" src="./SalaryDetail.ts" />
