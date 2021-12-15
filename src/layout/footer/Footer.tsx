import React from 'react'
// view component
import FooterView from './FooterView'

const Footer: React.FC = () => {
  const noticeList = ['고객센터', '공지사항']
  const ridiContentsList = [
    'RIDIPAPER',
    '제휴카드',
    '뷰어 다운로드',
    '리디캐시 충전',
  ]
  const questionList = [
    '콘텐츠 제공 문의',
    'CP 사이트',
    '사업 제휴 문의',
    '리디셀렉트 B2B',
  ]
  const snsList = ['페이스북', '인스타그램']
  const companyInfoList = ['회사 소개', '인재 채용']
  const businessInfoList1 = [
    '대표자 배기식',
    '사업자 등록번호 120-87-27435',
    '통신판매업 신고번호 제 2009-서울강남 35-02139호',
  ]
  const businessInfoList2 = [
    '이메일 help@ridi.com',
    '대표전화 1644-0331',
    '주소 서울시 강남구 역삼동 702-28 어반벤치빌딩 10층(테헤란로 325)',
  ]

  const termsLinkList = [
    '이용 약관',
    '개인 정보 처리 방침',
    '청소년 보호 정책',
    '사업자 정보 확인',
  ]

  const viewProps = {
    noticeList,
    ridiContentsList,
    questionList,
    snsList,
    companyInfoList,
    businessInfoList1,
    businessInfoList2,
    termsLinkList,
  }

  return <FooterView {...viewProps} />
}

export default Footer
