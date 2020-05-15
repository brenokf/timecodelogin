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
  Error,
} from './styles';
const Singin: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [InputEmail, setInputEmail] = useState('');
  const [InputPass, setInputPass] = useState('');

  async function ErrorAplication(event: FormEvent<HTMLFontElement>) {
    event.preventDefault();

    if (InputEmail === '' || InputPass === '') {
      setInputError('Enter your email and password');
      return;
    }
    setInputEmail('');
    setInputPass('');
    setInputError('');
  }
  return (
    <>
      <Layout />
      <Side>
        <img src={logoside} alt="logo side" />
      </Side>
      <Logo>
        <img src={logotimecode} alt="logo time code" />
      </Logo>

      <Title> LOGIN </Title>
      <Form1>
        <input
          value={InputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />
      </Form1>
      <Form2>
        <input
          value={InputPass}
          onChange={(e) => setInputPass(e.target.value)}
          placeholder="Enter Password"
          required
        />
      </Form2>

      <Button>
        <button type="submit"> Login </button>
      </Button>
      {inputError && <Error>{inputError}</Error>}
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
