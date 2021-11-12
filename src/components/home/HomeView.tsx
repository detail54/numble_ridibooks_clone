import React from 'react'
// interface
import { IHome } from './interface'
// component
import Basic from './basic/Basic'
import Romance from './romance/Romance'
import Fantasy from './fantasy/Fantasy'
import WebToon from './webtoon/WebToon'
import Bl from './bl/Bl'

const HomeView: React.FC<IHome> = (props) => {
  const { bookCategory } = props

  const comp = {
    basic: <Basic />,
    romance: <Romance />,
    fantasy: <Fantasy />,
    webtoon: <WebToon />,
    bl: <Bl />,
  }

  return <>{comp}</>
}

export default HomeView
