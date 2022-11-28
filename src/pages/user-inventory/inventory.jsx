import { Box } from "@mui/material";
import SearchAssets from "../../components/search-asset-dropdown";
import Header from "../../components/header";
import SelectNetwork from "../../components/select-network";

const Inventory = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Inventory" subtitle="These are all your assets" />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Users >> Inventory
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <SelectNetwork />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Items
            </Box>
            <Box display="block" justifyContent="space-between" alignItems="center">
                Looking for a specific item?
                <SearchAssets />
            </Box>
        </Box>
    )
}

export default Inventory