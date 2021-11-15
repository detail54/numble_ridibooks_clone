export interface IHome {
  bookCategory: JSX.Element
  categoryEnabled?: (data: string) => void
  basicEnabled: boolean
  romanceEnabled: boolean
  fantasyEnabled: boolean
  webToonEnabled: boolean
  blEnabled: boolean
}
