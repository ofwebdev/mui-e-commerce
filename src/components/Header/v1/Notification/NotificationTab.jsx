import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 10,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(0.5),
    padding: 0,
    minHeight: "40px",
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "8px",
    },
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.primary,
    },
  })
);

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: 1 }}>
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
          borderRadius: "8px",
          p: 0.5,
          height: "48px",
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="All" />
          <StyledTab label="Datasets" />
          {/* <StyledTab label="Connections" /> */}
        </StyledTabs>
      </Box>
    </Box>
  );
}
