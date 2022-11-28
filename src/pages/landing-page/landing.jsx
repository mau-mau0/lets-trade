import { Box } from "@mui/material";
import Header from "../../components/header";
import Paragraph from "../../components/paragraph";

const Landing = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Landing Page" subtitle="Welcome to the landing page" />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Paragraph 
                content="Welcome to Lets Trade. A peer-2-peer blockchain trading platform where you can trade your favorite assets!" 
                />
            </Box>
        </Box>
    )
}

export default Landing