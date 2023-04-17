import Logo from '../assets/logo.png'
import googleIconImg from '../assets/google-icon.svg';
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth';

import '../styles/login.css'


function Login (){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    
    const user = useAuth();
    console.log(user);
        
    

    function efetuarLogin (){
        console.log(email, password);
    }


    return ( 
        <div id="container">
            <div id ="container-login">
                <div id ="container-login-logo">
                    <span id ="container-login-imgLogo">  
                        <img id="logo" src={Logo} alt="login img"/> 
                    </span>
                </div>
                <div id="container-login-title">
                    <h1>Entrar</h1>
                </div>
                <form id="container-login-form" > 
                    <div id="container-login-form-email">
                        <label>Email</label>
                        <input type="email" onChange={event => setEmail( event.target.value)}/>
                    </div>
                    <div id="container-login-form-password">   
                        <label>Senha</label>
                        <input  type="password" onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <div id="container-login-form-button">   
                        <button onClick={efetuarLogin}>Entrar</button>
                    </div>
                    <div id="separator"> ou </div>
                    <div id="container-login-form-button-google">
                        <button  id="button-google"> <img src={googleIconImg} alt="icone google"/> <span>Entrar com o Google</span></button>
                    </div>
                    <div id="container-login-form-text">    
                        <span>Não possui conta?</span>
                        <a href="#/"> clique aqui</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;