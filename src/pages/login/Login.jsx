import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";

function Login() {

    // LES COMPOSANTS QUI SERONT SUR LA PAGE:

    // Se connecter
    // => LoginForm
    // S'inscrire
    // => RegisterForm

    return (
        <>
        <h1>Login</h1>
        <LoginForm />
        <RegisterForm />
        </>
    )
}

export default Login;