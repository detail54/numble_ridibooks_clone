import React, { useState, useEffect } from 'react'
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
    businessInfoList3,
    businessInfoList4,
    termsLinkList,
  } = props

  const [showBusinessInfo, setShowBusinessInfo] = useState<boolean>(false)
  const [arrowImg, setArrowImg] = useState(down)
  const [browserSize, setBrowserSize] = useState<string>(
    window.innerWidth >= 1000 ? 'wide' : 'narrow',
  )
  const [showMoreInfo, setShowMoreinfo] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1000) {
        setBrowserSize('wide')
      } else {
        setBrowserSize('narrow')
      }
    })
  }, [])

  const createlinkList = (items: string[], display?: string) => (
    <FooterSC.LinkList display={display}>
      {items.map((item) => (
        <FooterSC.LinkListItem key={item} display={display}>
          <FooterSC.LinkTag to='/' display={display}>
            {item}
          </FooterSC.LinkTag>
        </FooterSC.LinkListItem>
      ))}
    </FooterSC.LinkList>
  )

  const onBusinessInfo = () => {
    if (showBusinessInfo) {
      setShowBusinessInfo(false)
      setArrowImg(down)
    } else {
      setShowBusinessInfo(true)
      setArrowImg(up)
    }
  }

  const onMoreCompanyInfo = () => {
    setShowMoreinfo(true)
  }

  const moreCompanyInfo = (
    <FooterSC.MoreCompanyInfo onClick={onMoreCompanyInfo}>
      더보기
      <FooterSC.ArrowImg src={down} alt='down' />
    </FooterSC.MoreCompanyInfo>
  )

  const noticeListItem = noticeList.map((item) => (
    <FooterSC.NoticeListItem key={item}>
      <FooterSC.LinkTag to='/' color='white' fontWeight='bold'>
        {item}
      </FooterSC.LinkTag>
    </FooterSC.NoticeListItem>
  ))

  const ridiContentsListItem = (
    <FooterSC.LinkList>
      {ridiContentsList.map((item, index) => (
        <FooterSC.LinkListItem key={item}>
          {index === 0 ? (
            <FooterSC.LinkTag to='/' color='white' fontWeight='bold'>
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

  const footerContents =
    browserSize === 'wide' ? (
      <FooterSC.UlTagList>
        <FooterSC.UlTagListItem>{ridiContentsListItem}</FooterSC.UlTagListItem>
        <FooterSC.UlTagListItem>{questionListItem}</FooterSC.UlTagListItem>
        <FooterSC.UlTagListItem>{snsListItem}</FooterSC.UlTagListItem>
        <FooterSC.UlTagListItem>{companyInfoListItem}</FooterSC.UlTagListItem>
      </FooterSC.UlTagList>
    ) : (
      <FooterSC.UlTagList>
        <FooterSC.UlTagListItem>
          {ridiContentsListItem}
          {showMoreInfo && snsListItem}
        </FooterSC.UlTagListItem>
        <FooterSC.UlTagListItem>
          {companyInfoListItem}
          {showMoreInfo || moreCompanyInfo}
          {showMoreInfo && questionListItem}
        </FooterSC.UlTagListItem>
      </FooterSC.UlTagList>
    )

  const buisnessInfoContents = (
    <>
      <FooterSC.BusinessInfos>
        <FooterSC.ContentWrap>
          {businessInfoList1.map((info) => (
            <FooterSC.Contents key={info} bar>
              {info}
            </FooterSC.Contents>
          ))}
        </FooterSC.ContentWrap>
        <FooterSC.ContentWrap>
          {businessInfoList2.map((info) => (
            <FooterSC.Contents key={info}>{info}</FooterSC.Contents>
          ))}
        </FooterSC.ContentWrap>
      </FooterSC.BusinessInfos>
      <FooterSC.BusinessInfos>
        <FooterSC.ContentWrap>
          {businessInfoList3.map((info) => (
            <FooterSC.Contents key={info} bar>
              {info}
            </FooterSC.Contents>
          ))}
        </FooterSC.ContentWrap>
        <FooterSC.ContentWrap>
          {businessInfoList4.map((info) => (
            <FooterSC.Contents key={info}>{info}</FooterSC.Contents>
          ))}
        </FooterSC.ContentWrap>
      </FooterSC.BusinessInfos>
    </>
  )

  const buisnessInfo = (
    <>
      <FooterSC.BusinessInfoTitle onClick={onBusinessInfo}>
        리디(주) 사업자 정보
        <FooterSC.ArrowImg src={arrowImg} alt={`${arrowImg}`} />
      </FooterSC.BusinessInfoTitle>
      {showBusinessInfo && buisnessInfoContents}
    </>
  )

  const companyTerms = createlinkList(termsLinkList, 'flex')

  return (
    <FooterSC.Footer>
      <FooterSC.FooterWrap>
        <FooterSC.FooterMenus>
          <FooterSC.NoticeList>{noticeListItem}</FooterSC.NoticeList>
          {footerContents}
        </FooterSC.FooterMenus>
        <FooterSC.BusinessInfoWrap>{buisnessInfo}</FooterSC.BusinessInfoWrap>
        <FooterSC.CompanyTermsWrap>
          <FooterSC.Company>&copy; RIDI Corp.</FooterSC.Company>
          {companyTerms}
        </FooterSC.CompanyTermsWrap>
      </FooterSC.FooterWrap>
    </FooterSC.Footer>
  )
}

export default FooterView
