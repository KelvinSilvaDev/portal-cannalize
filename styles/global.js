import { createGlobalStyle } from "styled-components";
import { DESKTOP_WIDTH } from "../src/utils/constants";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: #2C2A32;
    
}
p {
  color: #fff;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  color: #fff;
  box-sizing: border-box;
}
main {
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  width: ${DESKTOP_WIDTH};
}
`;
