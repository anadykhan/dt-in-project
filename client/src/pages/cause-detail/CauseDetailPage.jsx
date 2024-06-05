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
import { useGetSingleCauseDataClient, usePushDonatorDataClient } from '../../hooks/hooks/causes-hooks-client/CausesHooksClient'
import { useUserData } from '../../provider/UserProvider'

const CauseDetailPage = () => {

    const causeId = useParams()
    const { data: singleCauseDataClient, isLoading: singleCauseDataClientLoading } = useGetSingleCauseDataClient(causeId.id)
    const { mutate, isLoading } = usePushDonatorDataClient();
    const { userData, userLoading } = useUserData();

    if(singleCauseDataClientLoading){
        return <h1>Loading</h1>
    }

    const handleDonateButton = async () => {
        try {
            const newDonator = {
                causeID: causeId.id,
                donator: userData?.data?._id
            }

            console.log(newDonator)

            await mutate(newDonator);
            console.log('User ID pushed as donator successfully');
        } catch (error) {
            console.error('Error pushing user ID as donator:', error);
        }
    }

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
                    _id={singleCauseDataClient.data._id}
                    cardDetail={singleCauseDataClient.data.cardDetail}
                    collected={singleCauseDataClient.data.collected}
                    goal={singleCauseDataClient.data.goal}
                    onClick={handleDonateButton}
                    ></CauseDetailCard>
                    <MoreCausesCard></MoreCausesCard>
                </Box>
            </Box>
        </Box>
    )
}

export default CauseDetailPage
