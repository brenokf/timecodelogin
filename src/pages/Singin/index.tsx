import React, { useState, FormEvent } from 'react';

import logoside from '../../assets/sidelogo.svg';
import logotimecode from '../../assets/LogoTimeCode.svg';
import {
  Title,
  Form1,
  Form2,
  Button,
  Layout,
  Side,
  Nconta,
  Fpassword,
  Logo,
} from './styles';
const Singin: React.FC = () => {
  const [inputError, setInputError] = useState('');
  return (
    <>
      <Layout />
      <Side>
        <img src={logoside} alt="logo side" />
      </Side>
      <Logo>
        <img src={logotimecode}  alt="logo time code"/>
      </Logo>

      <Title> LOGIN </Title>
      <Form1>
        <input type="text" id="email" placeholder  ="Enter Email" />
      </Form1>
      <Form2>
        <input type="password" id="password" placeholder="Enter Password" />
      </Form2>

      <Button>
        <button type="submit"> Login </button>
      </Button>

      <Nconta>
        <a href="register">No account</a>
      </Nconta>

      <Fpassword>
        <a href="rememberpas">Forgot Password</a>
      </Fpassword>
    </>
  );
};
export default Singin;
