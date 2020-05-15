import React, { useState, FormEvent } from 'react';

import logoside from '../../assets/sidelogo.svg';
import { Title, Form1,Form2,Button,Layout,Side,Nconta,Fpassword} from './styles';
const  Singin: React.FC = () => {
  return(
    <>
    <Layout/>
    <Side>
    <img src={logoside} alt="logo side"/>
    </Side>
    <Title> LOGIN </Title>
    <Form1>

      <input type ="text" id="email" placeholder=" email address"/>
    </Form1>
    <Form2>
      <input type ="password" id="password" placeholder=" your password"/>
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

}
export default Singin;
