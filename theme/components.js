import { blue, grey } from "./themeColors";
export const fontSize = 14;
export const fontFamily = [
  "Open Sans",
  "Roboto",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
].join(",");
export const components = {
  MuiCssBaseline: {
    styleOverrides: {
      p: {
        lineHeight: 1.75,
      },
      button: {
        fontFamily,
        fontSize,
      },
      ".MuiRating-sizeSmall": {
        fontSize: "20px",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
      "#nprogress .bar": {
        top: 0,
        left: 0,
        zIndex: 99999999,
        position: "fixed",
        overflow: "hidden",
        height: "3px !important",
        backgroundColor: blue.main,
        borderRadius: "0px 300px 300px 0px !important",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        zIndex: 0,
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 8,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },
  MuiPagination: {
    defaultProps: {
      variant: "outlined",
      color: "primary",
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: 8,
        paddingBottom: 8,
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        "& .secondary": {
          opacity: 0.4,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
      variant: "outlined",
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.color === "info" && {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            fontWeight: 600,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[300],
          },
        }),
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        minWidth: 0,
        minHeight: 0,
        fontWeight: 600,
        textTransform: "capitalize",
        ...(ownerState.color === "info" && {
          borderRadius: "8px",
        }),
      }),
    },
    defaultProps: {
      color: "inherit",
    },
  },
};
