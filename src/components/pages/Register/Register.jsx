import { useState, useEffect, useRef } from "react";
import { Navigate, Link } from "react-router-dom"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


    const UserRegex = /^[a-zA-Z][a-zA-Z0-9-]{3,23}$/;
    const PasswordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@&#$%]).{8,23}$/;
    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;

const Register = ({link, msg}) => {
    
    const [user, setUser] = useState(false)

    const usernameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [username, setUsername] = useState('');
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);
    
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    
    const [phone, setPhone] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);
    
    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

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
                    <input
                        type="text"
                        ref={usernameRef}
                        name="username"
                        id="username"
                        required
                        autoComplete="off"
                        className={!username ? "form-control" : isValidUsername ? "form-control is-valid" : "form-control is-invalid"}
                        aria-invalid={isValidUsername?"false":"true"}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setUsernameFocus(true)}
                        onBlur={()=>setUsernameFocus(false)}
                    />
                    <div id="userNameNote" className={usernameFocus && !isValidUsername ? "instructions mt-2 alert alert-warning" : "offscreen d-none"} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        &nbsp;Doit contenir au moins 4 caractères et au plus 24 caractères. Ne peut commencer que par une lettre.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        ref={emailRef}
                        name="email"
                        id="email"
                        required
                        autoComplete="off"
                        className={!email ? "form-control" : isValidEmail ? "form-control is-valid" : "form-control is-invalid"}
                        aria-invalid={isValidEmail?"false":"true"}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={()=> setEmailFocus(false)}
                    />
                    <div id="emailNote" className={emailFocus && !isValidEmail ? "instructions mt-2 alert alert-warning" : "offscreen d-none"} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        &nbsp;Doit être un email valide.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Numéro de téléphone</label>
                    <input
                        type="tel"
                        ref={phoneRef}
                        name="phone"
                        required
                        autoComplete="off"
                        id="phone" className={!phone ? "form-control" : isValidPhone ? "form-control is-valid" : "form-control is-invalid"}
                        onChange={(e) => {
                            const newValue = e.target.value.replace(/^0/, '+33')
                            setPhone(newValue)
                        }}
                        onFocus={() => setPhoneFocus(true)}
                        onBlur={()=> setPhoneFocus(false)}
                    />
                    <div id="phoneNote" className={phoneFocus && !isValidPhone ? "instructions mt-2 alert alert-warning" : "offscreen d-none"} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        &nbsp;Doit être un numéro de téléphone valide commençant par '+' suivi de l'indicatif du pays et du numéro de téléphone.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input
                        type="password"
                        ref={passwordRef}
                        name="password"
                        id="password"
                        required
                        autoComplete="off"
                        className={!password ? "form-control" : isValidPassword ? "form-control is-valid" : "form-control is-invalid"}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={()=> setPasswordFocus(false)}
                    />
                    <div id="passwordNote" className={passwordFocus && !isValidPassword ? "instructions mt-2 alert alert-warning" : "offscreen d-none"} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        &nbsp;Doit contenir au moins 8 caractères et au plus 24 caractères. Doit comporter au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                    <input
                        type="text"
                        ref={confirmPasswordRef}
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        autoComplete="off"
                        className={!confirmPassword ? "form-control" : isValidConfirmPassword ? "form-control is-valid" : "form-control is-invalid"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onFocus={() => setConfirmPasswordFocus(true)}
                        onBlur={()=> setConfirmPasswordFocus(false)}
                    />
                    <div id="confirmPasswordNote" className={confirmPasswordFocus && !isValidConfirmPassword ? "instructions mt-2 alert alert-warning" : "offscreen d-none"} role="alert">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        &nbsp;Doit correspondre au mot de passe saisi précédemment.
                    </div>
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
