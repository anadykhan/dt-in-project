import { Box } from '@mui/material'
import React from 'react'
import CauseDescription from '../../components/cause-detail/cause-description/CauseDescription'
import CauseDetailCard from '../../components/cause-detail/cause-detail-card/CauseDetailCard'
import CauseDetailIntro from '../../components/cause-detail/cause-detail-intro/CauseDetailIntro'
import CauseImage from '../../components/cause-detail/cause-image/CauseImage'
import CauseSummary from '../../components/cause-detail/cause-summary/CauseSummary'
import MoreCausesCard from '../../components/cause-detail/more-causes-card/MoreCausesCard'
import ListPageBanner from '../../components/list-page-banner/ListPageBanner'
import { useParams } from 'react-router-dom';
import { useGetSingleCauseDataClient } from '../../hooks/hooks/causes-hooks-client/CausesHooksClient'

const CauseDetailPage = () => {

    const causeId = useParams()
    const { data: singleCauseDataClient, isLoading: singleCauseDataClientLoading } = useGetSingleCauseDataClient(causeId.id)

    if(singleCauseDataClientLoading){
        return <h1>Loading</h1>
    }

    console.log(singleCauseDataClient)

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

                    <CauseDetailIntro
                    title={singleCauseDataClient.data.title}
                    titleContent={singleCauseDataClient.data.titleContent}
                    ></CauseDetailIntro>

                    <CauseImage></CauseImage>

                    <CauseDescription
                    description={singleCauseDataClient.data.description}descriptionPoints1={singleCauseDataClient.data.descriptionPoints[0]
                    }
                    descriptionPoints2={singleCauseDataClient.data.descriptionPoints[1]
                    }
                    descriptionPoints3={singleCauseDataClient.data.descriptionPoints[2]
                    }
                    ></CauseDescription>

                    <CauseSummary
                    summary={singleCauseDataClient.data.summary}
                    ></CauseSummary>
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

                    <CauseDetailCard
                    cardDetail={singleCauseDataClient.data.cardDetail}
                    collected={singleCauseDataClient.data.collected}
                    goal={singleCauseDataClient.data.goal}
                    ></CauseDetailCard>
                    <MoreCausesCard></MoreCausesCard>
                </Box>
            </Box>
        </Box>
    )
}

export default CauseDetailPage
