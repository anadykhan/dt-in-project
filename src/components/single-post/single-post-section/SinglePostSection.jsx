import { Box } from '@mui/material'
import React from 'react'
import SinglePostBanner from '../single-post-banner/SinglePostBanner'
import SinglePostContent from '../single-post-content/SinglePostContent'

const SinglePostSection = () => {
    return (
        <Box
            sx={{
                width: {
                    xs: 'full'
                }
            }}
        >
            <SinglePostBanner></SinglePostBanner>
            <Box
            sx={{
                padding:5
            }}
            >
                <SinglePostContent></SinglePostContent>
            </Box>
        </Box>
    )
}

export default SinglePostSection
