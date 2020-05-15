import styled from 'styled-components';

import { shade } from 'polished';

export const Layout = styled.form`

  position: absolute;
  width: 1100px;
  height: 550px;
  left: 251px;
  top: 50px;

  background: #f5f5f5;


`;

export const Side = styled.form`
  position: absolute;
left: 17.43%;
right: 40.57%;
top: 7.50%;
bottom: 20.7%;

`;

export const Logo = styled.image`
  position: absolute;
  width: 582.25px;
  height: 289.17px;
  left: 310.21px;
  top: 180.95px;
`;

export const Title = styled.h1`
  position: absolute;
  width: 376px;
  left: 75.0%;
  right: 21.25%;
  top: 25.32%;
  bottom: 52.21%;

  color: rgba(0, 0, 0, 0.2);
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.26em;
`;

export const Form1 = styled.form`
  input {
    position: absolute;
    width: 376px;
    height: 43px;
    left: 940px;
    top: 300px;
    padding: 16px 32px;
    color: #b7b7b7;


    border: 1px solid rgba(207, 206, 206, 0.89);
    box-sizing: border-box;
    border-radius: 100px;
  }

  ::-webkit-input-placeholder {
    color: #bebcbc;
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder {
    color: #bebcbc;
  }
`;

export const Form2 = styled.form`
  input {
    position: absolute;
    width: 376px;
    height: 43px;
    left: 940px;
    top: 370px;
    padding: 16px 32px;
    color: #b7b7b7;

    border: 1px solid rgba(207, 206, 206, 0.89);
    box-sizing: border-box;
    border-radius: 100px;

    ::-webkit-input-placeholder {
      color: #bebcbc;
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: #bebcbc;
    }
  }
`;

export const Button = styled.form`
  button {
    position: absolute;
    width: 376px;
    height: 45px;
    left: 940px;
    top: 480px;

    background: #0081f8;
    border: 1px solid #6e92ef;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#075AA6')};
    }

    -webkit-box-shadow: 5px;
    border-radius: 5px;

    -webkit-animation-duration: 0.5s;
    -webkit-animation-timing-function: ease;
    -webkit-animation-fill-mode: both;

    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: both;

    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
    border-radius: 100px;
  }
`;
export const Nconta = styled.form`
  position: absolute;
  width: 134px;
  height: 21px;
  left: 940px;
  top: 550px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: rgba(0, 129, 248, 0.78);
  a {
    color: #0081f8;
    text-decoration: none;

    border-radius: 5px;

    -webkit-animation-duration: 0.5s;
    -webkit-animation-timing-function: ease;
    -webkit-animation-fill-mode: both;

    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: both;

    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
  }
`;
export const Fpassword = styled.form`
  position: absolute;
  width: 180px;
  height: 21px;
  left: 1180px;
  top: 550px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  color: rgba(0, 129, 248, 0.78);

  a {
    color: #0081f8;
    text-decoration: none;

    border-radius: 5px;

    -webkit-animation-duration: 0.5s;
    -webkit-animation-timing-function: ease;
    -webkit-animation-fill-mode: both;

    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: both;

    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
