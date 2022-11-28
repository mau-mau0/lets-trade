import { Box, Button } from "@mui/material";
import Header from "../../components/header";
import Paragraph from "../../components/paragraph";

const IncomingOffers = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="User's incoming Offers" subtitle="Trade Offers" />
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
                You have no incoming trade offers at this time
            </Box>
            <Box>
                <Button>
                    New Trade Offer...
                </Button>
            </Box>
        </Box>
    )
}

export default IncomingOffers