export interface FooterViewProps {
  noticeList: string[]
  ridiContentsList: string[]
  questionList: string[]
  snsList: string[]
  companyInfoList: string[]
  businessInfoList1: string[]
  businessInfoList2: string[]
  businessInfoList3: string[]
  businessInfoList4: string[]
  termsLinkList: string[]
}

type TfontWeight = 'bold' | 'light'

export interface IFooterStyle {
  fontWeight?: TfontWeight
  bar?: boolean
  display?: string
}
