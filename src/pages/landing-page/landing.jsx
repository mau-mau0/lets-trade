import { Box } from "@mui/material";
import Header from "../../components/header";
const Landing = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Landing Page" subtitle="Welcome to the landing page" />
            </Box>
        </Box>
    )
}

export default Landing