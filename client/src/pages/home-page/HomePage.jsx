import { Box } from "@mui/material"
import Banner from '../../components/home/banner/Banner'
import AccordionSection from '../../components/home/accordion/accordion-section/AccordionSection'
import CauseSection from '../../components/home/cause/cause-section/CauseSection'
import UpcomingEventSection from '../../components/home/upcoming-event/upcoming-event-section/UpcomingEventSection'
import CategorySection from "../../components/home/cateogry/category-section/CategorySection"

const HomePage = () => {
  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 15
    }}
    >
        <Banner></Banner>
        <CategorySection></CategorySection>
        <AccordionSection></AccordionSection>
        <CauseSection></CauseSection>
        {/* <UpcomingEventSection></UpcomingEventSection> */}

    </Box>
  )
}
export default HomePage