import styled from "styled-components";

export const All = styled.div`
  .dropbtn {
    width: ${({ isDesktop }) => (isDesktop ? "" : "300px")};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    color: #2c2a32;
    ::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;

      border-top: 8px solid #2c2a32;
      margin-left: 8px;
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    //background-color: #f1f1f1;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 9999;
  }

  .dropdown-content a {
    color: black;
    padding: 10px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
    border-radius: 10px;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  } */
`;
