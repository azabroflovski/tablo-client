<script lang="ts" setup>
import { Employee } from '../types'
import EmployeeCard from './EmployeeCard.vue'

const employees: Employee[] = [
  {
    firstName: 'Toshmat',
    lastName: 'Eshmatov',
    middleName: 'Sashmat',
    position: 'Терапевт',
    avatarUrl: 'https://delai-vibor.com/wp-content/uploads/2023/05/Vrach.jpg',
    availableTime: {
      from: '16:00',
      to: '20:00'
    },
    experienceInYear: 5
  },
  {
    firstName: 'Toshmat',
    lastName: 'Eshmatov',
    middleName: 'Sashmat',
    position: 'Терапевт',
    avatarUrl: 'https://delai-vibor.com/wp-content/uploads/2023/05/Vrach.jpg',
    availableTime: {
      from: '16:00',
      to: '20:00'
    },
    experienceInYear: 5
  },
  {
    firstName: 'Toshmat',
    lastName: 'Eshmatov',
    middleName: 'Sashmat',
    position: 'Терапевт',
    avatarUrl: 'https://delai-vibor.com/wp-content/uploads/2023/05/Vrach.jpg',
    availableTime: {
      from: '16:00',
      to: '20:00'
    },
    experienceInYear: 5
  },
  {
    firstName: 'Toshmat',
    lastName: 'Eshmatov',
    middleName: 'Sashmat',
    position: 'Терапевт',
    avatarUrl: 'https://delai-vibor.com/wp-content/uploads/2023/05/Vrach.jpg',
    availableTime: {
      from: '16:00',
      to: '20:00'
    },
    experienceInYear: 5
  },
  {
    firstName: 'Toshmat',
    lastName: 'Eshmatov',
    middleName: 'Sashmat',
    position: 'Терапевт',
    avatarUrl: 'https://delai-vibor.com/wp-content/uploads/2023/05/Vrach.jpg',
    availableTime: {
      from: '16:00',
      to: '20:00'
    },
    experienceInYear: 5
  },
  {
    firstName: 'Toshmat',
    lastName: 'Eshmatov',
    middleName: 'Sashmat',
    position: 'Терапевт',
    avatarUrl: 'https://delai-vibor.com/wp-content/uploads/2023/05/Vrach.jpg',
    availableTime: {
      from: '16:00',
      to: '20:00'
    },
    experienceInYear: 5
  },
  {
    firstName: 'Toshmat',
    lastName: 'Eshmatov',
    middleName: 'Sashmat',
    position: 'Терапевт',
    avatarUrl: 'https://delai-vibor.com/wp-content/uploads/2023/05/Vrach.jpg',
    availableTime: {
      from: '16:00',
      to: '20:00'
    },
    experienceInYear: 5
  },
  {
    firstName: 'Toshmat',
    lastName: 'Eshmatov',
    middleName: 'Sashmat',
    position: 'Терапевт',
    avatarUrl: 'https://delai-vibor.com/wp-content/uploads/2023/05/Vrach.jpg',
    availableTime: {
      from: '16:00',
      to: '20:00'
    },
    experienceInYear: 5
  },
  {
    firstName: 'Toshmat',
    lastName: 'Eshmatov',
    middleName: 'Sashmat',
    position: 'Терапевт',
    avatarUrl: 'https://delai-vibor.com/wp-content/uploads/2023/05/Vrach.jpg',
    availableTime: {
      from: '16:00',
      to: '20:00'
    },
    experienceInYear: 5
  }
]
</script>

<template>
  <div class="employee-list">
    <EmployeeCard v-for="employee in employees" :employee="employee" />
  </div>
</template>

<style lang="less">
.employee-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
