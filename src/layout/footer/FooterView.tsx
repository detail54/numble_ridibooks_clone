import React from 'react'
// style
import { FooterSC } from './Footer.styles'
// interface
import { FooterViewProps } from './interface'
// image
import up from '../../asset/images/icons/up.png'
import down from '../../asset/images/icons/down.png'

const FooterView: React.FC<FooterViewProps> = (props) => {
  const {
    noticeList,
    ridiContentsList,
    questionList,
    snsList,
    companyInfoList,
    businessInfoList1,
    businessInfoList2,
    termsLinkList,
  } = props

  const createlinkList = (items: string[]) => (
    <FooterSC.LinkList>
      {items.map((item) => (
        <FooterSC.LinkListItem key={item}>
          <FooterSC.LinkTag to='/' color='white'>
            {item}
          </FooterSC.LinkTag>
        </FooterSC.LinkListItem>
      ))}
    </FooterSC.LinkList>
  )

  const noticeListItem = noticeList.map((item) => (
    <FooterSC.NoticeListItem key={item}>
      <FooterSC.LinkTag to='/' color='white' boldFont>
        {item}
      </FooterSC.LinkTag>
    </FooterSC.NoticeListItem>
  ))

  const ridiContentsListItem = (
    <FooterSC.LinkList>
      {ridiContentsList.map((item, index) => (
        <FooterSC.LinkListItem key={item}>
          {index === 0 ? (
            <FooterSC.LinkTag to='/' color='white' boldFont>
              {item}
            </FooterSC.LinkTag>
          ) : (
            <FooterSC.LinkTag to='/' color='white'>
              {item}
            </FooterSC.LinkTag>
          )}
        </FooterSC.LinkListItem>
      ))}
    </FooterSC.LinkList>
  )

  const questionListItem = createlinkList(questionList)
  const snsListItem = createlinkList(snsList)
  const companyInfoListItem = createlinkList(companyInfoList)

  return (
    <FooterSC.Footer>
      <FooterSC.FooterWrap>
        <FooterSC.NoticeList>{noticeListItem}</FooterSC.NoticeList>
        <FooterSC.UlTagList>
          <FooterSC.UlTagListItem>
            {ridiContentsListItem}
          </FooterSC.UlTagListItem>
          <FooterSC.UlTagListItem>{questionListItem}</FooterSC.UlTagListItem>
          <FooterSC.UlTagListItem>{snsListItem}</FooterSC.UlTagListItem>
          <FooterSC.UlTagListItem>{companyInfoListItem}</FooterSC.UlTagListItem>
        </FooterSC.UlTagList>
      </FooterSC.FooterWrap>
    </FooterSC.Footer>
  )
}

export default FooterView
