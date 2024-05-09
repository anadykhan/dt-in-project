import { Box } from '@mui/material'
import React from 'react'
import CauseDescription from '../../components/cause-detail/cause-description/CauseDescription'
import CauseDetailCard from '../../components/cause-detail/cause-detail-card/CauseDetailCard'
import CauseDetailIntro from '../../components/cause-detail/cause-detail-intro/CauseDetailIntro'
import CauseImage from '../../components/cause-detail/cause-image/CauseImage'
import CauseSummary from '../../components/cause-detail/cause-summary/CauseSummary'
import MoreCausesCard from '../../components/cause-detail/more-causes-card/MoreCausesCard'
import ListPageBanner from '../../components/list-page-banner/ListPageBanner'

const CauseDetailPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <ListPageBanner
                title='Cause Detail'
                sx={{
                    width: '100%',
                    marginBottom: 10,
                }}
            ></ListPageBanner>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 3,
                    gap: 7,
                    '@media (min-width: 1024px)': {
                        flexDirection: 'row',
                        alignItems: 'start',
                    },
                    '@media (min-width: 1440px)': {
                        width: '80%',
                    }
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 7
                    }}
                >

                    <CauseDetailIntro></CauseDetailIntro>
                    <CauseImage></CauseImage>
                    <CauseDescription></CauseDescription>
                    <CauseSummary></CauseSummary>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 7
                    }}
                >

                    <CauseDetailCard></CauseDetailCard>
                    <MoreCausesCard></MoreCausesCard>
                </Box>
            </Box>
        </Box>
    )
}

export default CauseDetailPage
