import styled from 'styled-components';

import { shade } from 'polished';

export const Layout = styled.form`
  position: absolute;
  width: 1287px;
  height: 640px;
  left: 90px;

  background: #f8f8f8;
`;

export const Side = styled.form`
  position: absolute;
  width: 644px;
  height: 656px;
  left: 61px;
`;

export const Title = styled.h1`
  position: absolute;
  width: 189px;
  height: 56px;
  left: 918px;
  top: 220px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.26em;

  color: rgba(0, 0, 0, 0.49);
`;

export const Form1 = styled.form`
  input {
    position: absolute;
    width: 376px;
    height: 43px;
    left: 825px;
    top: 340px;

    border: 1px solid rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    border-radius: 4px;

    ::-webkit-input-placeholder {
      color: #bebcbc;
    
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: #bebcbc;
    
    }
  }
`;

export const Form2 = styled.form`
  input {
    position: absolute;
    width: 376px;
    height: 43px;
    left: 825px;
    top: 400px;

    border: 1px solid rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    border-radius: 4px;

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
    left: 825px;
    top: 500px;

    background: #0081f8;
    border: 1px solid #6e92ef;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 6px;

    border: 0;
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
  }
`;
export const Nconta = styled.form`
  position: absolute;
  width: 134px;
  height: 21px;
  left: 831px;
  top: 600px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: rgba(0, 129, 248, 0.78);
  a{
  color:#0081F8;
  text-decoration: none;

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
  }
`;
export const Fpassword = styled.form`
  position: absolute;
  width: 172px;
  height: 21px;
  left: 1060px;
  top: 600px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: rgba(0, 129, 248, 0.78);

  a{
  color:#0081F8;
  text-decoration: none;

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
  }
`;
