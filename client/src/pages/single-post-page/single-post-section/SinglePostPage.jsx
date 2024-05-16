import { Box } from '@mui/material'
import React from 'react'
import SinglePostBanner from '../../../components/single-post/single-post-banner/SinglePostBanner'
import SinglePostContent from '../../../components/single-post/single-post-content/SinglePostContent'

const SinglePostPage = () => {
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

export default SinglePostPage
