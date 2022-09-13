import { useState } from 'react';

import './login.scss';

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ user, password });
    }

    return (
        <div className="login-container">
            <h1>Login</h1>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-controller">
                    <input
                        name="user"
                        id="user"
                        type="text"
                        placeholder="Usuário"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>

                <div className="form-controller">
                    <input
                        name="password"
                        id="password"
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
        </div>
    );
}

export default Login;