export interface Employee {
  firstName: string
  lastName: string
  middleName?: string
  position: string
  experienceInYear?: string | number
  avatarUrl?: string
  availableTime: {
    from: string | number
    to: string | number
  }
}
