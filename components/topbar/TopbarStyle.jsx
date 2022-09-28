import { styled } from "@mui/material";
import { layoutConstant } from "utils/constants";
const TopbarStyle = styled("div")(({ theme: { palette } }) => ({
  root: {
    fontSize: 12,
    background: palette.secondary.main,
    height: layoutConstant.topbarHeight,
    color: palette.secondary.contrastText,
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topbarLeft: {
    "& .logo": {
      display: "none",
    },
    "& .title": {
      marginLeft: "10px",
    },
    "@media only screen and (max-width: 900px)": {
      "& .logo": {
        display: "block",
      },
      "& > *:not(.logo)": {
        display: "none",
      },
    },
  },
  topbarRight: {
    "& .link": {
      paddingRight: 30,
      color: palette.secondary.contrastText,
    },
    "@media only screen and (max-width: 900px)": {
      "& .link": {
        display: "none",
      },
    },
  },
  menuItem: {
    minWidth: 100,
  },
  handler: {
    height: layoutConstant.topbarHeight,
  },
  smallRoundedImage: {
    width: 25,
    height: 15,
    borderRadius: 2,
  },
  menuTitle: {
    fontSize: 12,
    fontWeight: 600,
    marginLeft: "0.5rem",
  },
}));
export default TopbarStyle;
