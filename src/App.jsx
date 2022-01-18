import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import translations from './translations'
import { IntlProvider } from 'react-intl'
import { Menu, Dropdown, Button, Typography, Space } from 'antd'

import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Survey from './pages/Survey'
import Home from './pages/Home'
import Completed from './pages/Completed'

const { Text } = Typography

const languagesAbbr = {
  en: 'English',
  he: 'עברית',
  ar: 'العربية',
}

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en')

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => setLanguage('en')}>
        <Text>English</Text>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => setLanguage('he')}>
        <Text>עברית</Text>
      </Menu.Item>
      <Menu.Item key="3" onClick={() => setLanguage('ar')}>
        <Text>العربية</Text>
      </Menu.Item>
    </Menu>
  )

  useEffect(() => {
    localStorage.setItem('lang', language)
  }, [language])

  return (
    <IntlProvider locale={language} messages={translations[language]}>
      {/* only show this dropdown for login and home page */}
      <Dropdown
        overlay={menu}
        placement="bottomCenter"
        className="changeLanguage"
      >
        <Button>{languagesAbbr[language]}</Button>
      </Dropdown>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/survey/:id" element={<Survey language={language} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </IntlProvider>
  )
}

export default App
