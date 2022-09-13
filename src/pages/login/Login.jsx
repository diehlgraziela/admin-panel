import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import './login.scss';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //autenticação simples (não é o jeito certo de fazer)
        console.log({ user, password })
        if (user === "admin" && password === "admin") {
            navigate('/listas/usuarios');
        } else {
            alert("Usuário ou senha incorretos");
        }
    }

    return (
        <div className="login-container">
            <div className="form-container">
                <h1>Bem-vindo ao Painel Admin!</h1>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-controller">
                        <input
                            type="user"
                            placeholder="Usuário"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>

                    <div className="form-controller">
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-controller">
                        <button type="submit">Entrar</button>
                    </div>
                </form>

                <p>Ainda não possui cadastro? <Link to="/cadastro" className="link"> Registre-se</Link></p>
            </div>
        </div>
    );
}

export default Login;