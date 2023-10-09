import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Loader } from './components/Loader'
import { Home } from './pages'
import Layout from './components/Layout/Layout'

import { Cloudinary } from '@cloudinary/url-gen'

const App = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'ddd1bjkyz'}});

  const [isVisible, toggleVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      toggleVisible(false)
    }, 3000
    )
  }, [])

  return (
    <Box>
      <Loader isVisible={isVisible}/>
      <Layout />
    </Box>
  )
}

export default App