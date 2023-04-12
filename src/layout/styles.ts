import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: black;
    background: #292929;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .layoult {
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  .loginTable {
    width: 30vw;
    height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .signUpTable {
    width: 30vw;
    height: 100vh;
    background: white;
    display: block;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .contentTable {
    width: 70vw;
    height: 100vh;
    background: #292929;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    justify-content: center;
  }

  .backgroundTrees {
    display: flex;
    height: 100vh;
    align-items: flex-end;
    position: fixed;
    width: 70vw;
    justify-content: center;
    z-index: 0;
  }

  .contentsignuptable {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  .signUpDiv {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .linkDiv {
    margin-left: 5px;
    color: #7842e3;
    font-weight: bold;
  }

  .backButton {
    margin-top: 5%;
    margin-left: 5%;
  }

  .buttons {
    border-radius: 20px;
  }

  .logo {
    height: 150px;
  }

  .logoHeader {
    height: 12vh;
  }

  .logoSpin {
    margin-bottom: -40px;
    height: 150px;
  }

  .spaceBetween {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titles {
    margin: 0;
    color: white;
    font-weight: 700;
    font-size: 3rem;
  }

  .subTitles {
    color: #ffffff6b;
  }

  .loginTitle {
    font-size: 2.5rem;
    margin-bottom: 0px;
  }

  .to-do {
    padding-left: 10%;
    z-index: 1;
  }

  .loader {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .cardPage {
    width: 100%;
    height: 93vh;
    background-color: white;
    .column-content {
      display: flex;
    }
  }

  .header {
    background-color: #292929;
    height: 7vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile {
    padding-right: 4%;
  }

  .name {
    padding-left: 4%;
  }

  .welcome {
    display: flex;
    align-items: center;
    color: white;
  }

  .profileNameHeader {
    margin-left: 8px;
    font-weight: bolder;
  }

  .OptionsBtn {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #7842e3;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export const ColumnStyled = styled.div`
  width: 20vw;
  min-height: auto;
  border: 1px solid lightgray;
  background-color: #fff;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .task-drop {
    padding: 5px;
    width: 95%;
  }
  .card {
    width: 100%;
    height: 27vh;
    border: 1px solid lightgray;
    margin-bottom: 0.5em;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
  }

  .select {
    height: 20px;
    width: 100%;
    background-color: rebeccapurple;
  }

  .drag {
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
