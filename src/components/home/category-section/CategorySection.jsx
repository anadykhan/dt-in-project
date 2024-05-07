import { Box } from '@mui/material'
import React from 'react'
import CategoryHeader from '../category-header/CategoryHeader'

const CategorySection = () => {
  return (
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center'
    }}
    >
        <CategoryHeader
        title='Inspire and Help Needy!'
        subtitle='GET INVOLVED TODAY'
        background='red'
        ></CategoryHeader>
    </Box>
  )
}

export default CategorySection
