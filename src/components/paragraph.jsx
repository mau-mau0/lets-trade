import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Paragraph = ({ content }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="p"
        color={colors.grey[100]}
        fontWeight="600"
        sx={{ m: "0 0 5px 0" }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default Paragraph;