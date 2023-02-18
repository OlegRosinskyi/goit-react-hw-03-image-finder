import styled from "styled-components";

export const Backdrop = styled.div `display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2000; 
//background-color: red;
    //pointer-events: none;
  //  opacity: 0;
  //  visibility: hidden;

    background: rgba(0, 0, 0, 0.2);
  //  transition: opacity 250ms, visibility 250ms;
    `
    export const ModalWindous = styled.div `position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 48px 20px; 
    width: 280px;

    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 4px;

    height: 100vh;
    overflow-y: scroll;`