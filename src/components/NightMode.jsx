import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundColor: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  backgroundColor: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`

    body {
        ${(props) => (props.theme === "light" ? lightTheme : darkTheme)};
    }
`;
