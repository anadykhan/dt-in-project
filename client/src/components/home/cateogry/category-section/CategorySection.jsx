import { Box } from '@mui/material'
import React from 'react'
import CategoryHeader from '../category-header/CategoryHeader'
import CategoryCard from '../../../category/CategoryCard'
import CommonButton from '../../../general/button/CommonButton'

const CategorySection = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 8,
                }}
            >
                <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                    '@media (min-width: 768px)': {
                        flexDirection: 'row'
                      },
                }}
                >

                    <CategoryHeader
                        title='Inspire and Help Needy!'
                        subtitle='GET INVOLVED TODAY'
                        background='#ef5350'
                    ></CategoryHeader>
                    <CommonButton
                        content='LEARN MORE'
                        width={200}
                    />
                </Box>
                {/* <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                {
                    categorySectionData.map((data) => {
                        
                    })
                }
            </Box> */}

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        flexWrap: 'wrap'
                    }}
                >
                    <CategoryCard
                        title='Education for all'
                        image='src/assets/istockphoto-1430371482-612x612.jpg'
                        content='Discover innovative approaches to sustainable agriculture.'
                    ></CategoryCard>
                    <CategoryCard
                        title='Education for all'
                        image='src/assets/istockphoto-1430371482-612x612.jpg'
                        content='Discover innovative approaches to sustainable agriculture.'
                    ></CategoryCard>
                    <CategoryCard
                        title='Education for all'
                        image='src/assets/istockphoto-1430371482-612x612.jpg'
                        content='Discover innovative approaches to sustainable agriculture.'
                    ></CategoryCard>
                </Box>
            </Box>
        </Box>
    )
}

export default CategorySection
