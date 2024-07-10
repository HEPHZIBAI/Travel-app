import React from 'react'
import  Box from '@mui/material/Box'
import ToCard from './ToCard'

const Content = () => {
  return (
    <Box flex={2} p={3}>
      <ToCard/>
      <ToCard/>
      <ToCard/>
      <ToCard/>
      <ToCard/>
    </Box>
  )
}

export default Content