import { Box, Button } from "@mui/material";
import Header from "../../components/header";
import Paragraph from "../../components/paragraph";

const OutgoingOffers = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="User's Sent Offers" subtitle="Trade Offers" />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Paragraph 
                content="Your inventory is currently Private." 
                />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <Paragraph 
                    content="Incoming Offers" 
                    />
                </Box>
                <Box>
                    <Paragraph 
                    content="Sent Offers" 
                    />
                </Box>
            </Box>
            <Box>
                You have no sent trade offers at this time
            </Box>
            <Box>
                <Button>
                    New Trade Offer...
                </Button>
            </Box>
        </Box>
    )
}

export default OutgoingOffers