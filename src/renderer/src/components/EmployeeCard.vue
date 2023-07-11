<script lang="ts" setup>
import {
  computed,
  defineProps
} from "vue";
import { Employee } from '../types'

const { employee } = defineProps<{
  employee: Employee
}>()

const displayName = computed(() => employee.firstName + ' ' + employee.middleName + ' ' + employee.lastName)
</script>

<template>
  <div class="employee-card">
    <div class="employee-card__img">
      <img :src="employee.avatarUrl" :alt="displayName" />
    </div>

    <div class="employee-card__info">
      <div class="employee-card__position">
        {{ employee.position }}
      </div>

      <div class="employee-card__available">
        <div>Время работы</div>
        <div>{{ employee.availableTime.from }} - {{ employee.availableTime.to }}</div>
      </div>

      <div class="employee-card__name">
        {{ displayName }}
      </div>

      <div v-if="employee.experienceInYear" class="employee-card__experience">
        Опыт {{ employee.experienceInYear }} лет
      </div>
    </div>
  </div>
</template>

<style lang="less">
.employee-card {
  width: 30vw;
  height: 30vh;
  margin: 1vh;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background-color: #d1e3ff;
  padding: 20px;


  &__img {
    max-width: 40%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  &__info {
    align-self: center;
    padding: 20px 30px;
  }

  &__position {
    font-size: 34px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &__available {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }

  &__name {
    font-size: 30px;
    margin-bottom: 16px;
  }

  &__experience {
    font-weight: bold;
    background-color: #a0beff;
    display: inline-flex;
    padding: 4px 10px;
    border-radius: 3px;

  }
}
</style>
