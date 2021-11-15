import React, { useState } from 'react'
import { createNumericLiteral } from 'typescript'
// component
import Basic from './basic/Basic'
import Bl from './bl/Bl'
import Fantasy from './fantasy/Fantasy'
import HomeView from './HomeView'
import Romance from './romance/Romance'
import WebToon from './webtoon/WebToon'

const Home: React.FC = () => {
  const [bookCategory, setBookCategory] = useState<JSX.Element>(<Basic />)
  const [basicEnabled, setBasicEnabled] = useState<boolean>(true)
  const [romanceEnabled, setRomanceEnabled] = useState<boolean>(false)
  const [fantasyEnabled, setFantasyEnabled] = useState<boolean>(false)
  const [webToonEnabled, setWebToonEnabled] = useState<boolean>(false)
  const [blEnabled, setBlEnabled] = useState<boolean>(false)

  console.log('basicEnabled:::', basicEnabled)
  console.log('romanceEnabled:::', romanceEnabled)
  console.log('fantasyEnabled:::', fantasyEnabled)
  console.log('webToonEnabled:::', webToonEnabled)
  console.log('blEnabled:::', blEnabled)

  const categoryEnabled = (data: string) => {
    switch (data) {
      case 'basic':
        setBookCategory(<Basic />)
        setBasicEnabled(true)
        setRomanceEnabled(false)
        setFantasyEnabled(false)
        setWebToonEnabled(false)
        setBlEnabled(false)
        break
      case 'romance':
        setBookCategory(<Romance />)
        setBasicEnabled(false)
        setRomanceEnabled(true)
        setFantasyEnabled(false)
        setWebToonEnabled(false)
        setBlEnabled(false)
        break
      case 'fantasy':
        setBookCategory(<Fantasy />)
        setBasicEnabled(false)
        setRomanceEnabled(false)
        setFantasyEnabled(true)
        setWebToonEnabled(false)
        setBlEnabled(false)
        break
      case 'webtoon':
        setBookCategory(<WebToon />)
        setBasicEnabled(false)
        setRomanceEnabled(false)
        setFantasyEnabled(false)
        setWebToonEnabled(true)
        setBlEnabled(false)
        break
      case 'bl':
        setBookCategory(<Bl />)
        setBasicEnabled(false)
        setRomanceEnabled(false)
        setFantasyEnabled(false)
        setWebToonEnabled(false)
        setBlEnabled(true)
        break
      default:
        break
    }
  }

  const viewProps = {
    bookCategory,
    categoryEnabled,
    basicEnabled,
    romanceEnabled,
    fantasyEnabled,
    webToonEnabled,
    blEnabled,
  }

  return <HomeView {...viewProps} />
}

export default Home
