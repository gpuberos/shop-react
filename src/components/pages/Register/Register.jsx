import { useState, useEffect, useRef } from "react";
import { Navigate, Link } from "react-router-dom"

const Register = ({link, msg}) => {

    const usernameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [user, setUser] = useState(false)

    const UserRegex = /^[a-zA-Z][a-zA-Z0-9-]{3,23}$/;
    const PasswordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@&#$%]).{8,23}$/;
    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;

    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        setIsValidUsername(UserRegex.test(username));
    }, [username])

    useEffect(() => {
        setIsValidEmail(EmailRegex.test(email));
    }, [email])

    useEffect(() => {
        setIsValidPhone(PhoneNumberRegex.test(phone));
    }, [phone])

    useEffect(() => {
        setIsValidPassword(PasswordRegex.test(password));
    }, [password])

    useEffect(() => {
        setIsValidConfirmPassword(password === confirmPassword);
    }, [password, confirmPassword])
    
    // Pour pouvoir accès aux 3 états on met async : attente, validation et rejet
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValidUsername && isValidEmail && isValidPhone && isValidPassword && isValidConfirmPassword) {
            setUser(true);
        }
    }

    return (
        <div className="card">
            {user && <Navigate to="/account" replace={true} />}
            <div className="card-body">
                <h1 className="card-title">Inscription</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                        <input type="text" ref={usernameRef} name="username" id="username" className={username.length < 1 ? "form-control" : isValidUsername ? "form-control is-valid" : "form-control is-invalid"} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" ref={emailRef} name="email" id="email" className={email.length < 1 ? "form-control" : isValidEmail ? "form-control is-valid" : "form-control is-invalid"} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Numéro de téléphone</label>
                        <input type="tel" ref={phoneRef} name="phone" id="phone" className={phone.length < 1 ? "form-control" : isValidPhone ? "form-control is-valid" : "form-control is-invalid"} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input type="password" ref={passwordRef} name="password" id="password" className={password.length < 1 ? "form-control" : isValidPassword ? "form-control is-valid" : "form-control is-invalid"} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                        <input type="text" ref={confirmPasswordRef} name="confirmPassword" id="confirmPassword" className={confirmPassword.length < 1 ? "form-control" : isValidConfirmPassword ? "form-control is-valid" : "form-control is-invalid"} onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="my-4 form-text text-primary">
                            <Link className="text-decoration-none" to={link}>{msg}</Link>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary btn-lg mt-2">Envoyer</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;