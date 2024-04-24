import { Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;

const Register = ({link, msg}) => {

    const [user, setUser] = useState(false)
    const [success, setSuccess] = useState(false)
    const [msgErr, setMsgErr] = useState('')

    const [userName, setUserName] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const userRef = useRef()

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        const result = UserRegex.test(userName);
        setValidName(result);
    },[userName])

    useEffect(()=>{
        const result = EmailRegex.test(email);
        setValidEmail(result);
    },[email])

    useEffect(()=>{
        const result = PhoneNumberRegex.test(phone);
        setValidPhone(result);
    },[phone])

    useEffect(()=>{
        const result = PasswordRegex.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    },[pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const verif = validName && validPwd && validEmail && validPhone && validMatch
        if (verif) {
            setSuccess(true)
        } else {
            setSuccess(false)
            setMsgErr('Les informations saisies ne sont pas valide.')
        }
    }

    return (
        <div className="card">
            {user && <Navigate to="/account" replace={true} />}
            <div className="card-body">
                <h1 className="card-title">Inscription</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-floating">
                        <input 
                            type="text"
                            id="userName"
                            name="userName"
                            autoComplete="off"
                            placeholder="user123"
                            required
                            className={!userName ? "form-control" : validName ? "is-valid form-control" : "is-invalid form-control"}
                            aria-invalid={!validName}
                            ref={userRef}
                            onChange={(e)=>setUserName(e.target.value)}
                            onFocus={()=>setUserFocus(true)}
                            onBlur={()=>setUserFocus(false)}
                        />
                        <label htmlFor="userName" className="form-label d-flex">Nom d'utilisateur : </label>
                    </div>
                    <div 
                        id="uidnote"
                        className={userFocus && userName && !validName ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                        role="alert"
                    >
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        &nbsp;Entre 4 et 24 caractères.<br/>
                        Doit commencer par une lettre.<br/>
                        Doit comporter au moins une lettre et aucun caractère spécial.
                    </div>  
                <div className="form-floating mt-2">
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    placeholder="example@mail.com"
                    required
                    className={!email ? "form-control" : validEmail ? "is-valid form-control" : "is-invalid form-control"}
                    aria-invalid={!validEmail}
                    onChange={(e)=>setEmail(e.target.value)}
                    onFocus={()=>setEmailFocus(true)}
                    onBlur={()=>setEmailFocus(false)}
                    />
                    <label htmlFor="email" className="form-label d-flex">Adresse mail :
                    </label>
                </div>
                <div 
                    id="emailnote"
                    className={emailFocus && email && !validEmail ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                    role="alert"
                >
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    &nbsp;L'adresse mail doit avoir le bon format.
                </div> 
                <div className="form-floating mt-2">
                    <input 
                    type="tel"
                    id="tel"
                    name="tel"
                    autoComplete="off"
                    placeholder="+33607080901"
                    required
                    className={!phone ? "form-control" : (validPhone ? "is-valid form-control" : "is-invalid form-control")}
                    aria-invalid={validPhone?"false":"true"}
                    onChange={(e)=>{
                        const newValue = e.target.value.replace(/^0/, '+33');
                        setPhone(newValue);
                    }}
                    onFocus={()=>setPhoneFocus(true)}
                    onBlur={()=>setPhoneFocus(false)}
                    />
                    <label htmlFor="tel" className="form-label d-flex">Numéro de téléphone :
                    </label>
                </div>
                <div 
                    id="telnote"
                    className={phoneFocus && phone && !validPhone ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                    role="alert"
                >
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    &nbsp;Le numéro de téléphone doit avoir le bon format.'.
                </div> 
                <div className="form-floating mt-2">
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        placeholder="P@s5word"
                        required
                        className={!pwd ? "form-control" : (validPwd ? "is-valid form-control" : "is-invalid form-control")}
                        aria-invalid={validPwd?"false":"true"}
                        onChange={(e)=>setPwd(e.target.value)}
                        onFocus={()=>setPwdFocus(true)}
                        onBlur={()=>setPwdFocus(false)}
                    />
                    <label htmlFor="password" className="form-label d-flex">Mot de passe :</label>
                </div>
                <div 
                    id="pwdnote"
                    className={pwdFocus && !validPwd ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                    role="alert"
                >
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    &nbsp;Doit contenir au moins 8 caractères.<br/>
                    Doit comporter au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.
                </div>  
                <div className="form-floating mt-2">
                    <input 
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="off"
                        placeholder="P@s5word"
                        required
                        className={!matchPwd ? "form-control" : (validMatch ? "is-valid form-control" : "is-invalid form-control")}
                        aria-invalid={validMatch?"false":"true"}
                        onChange={(e)=>setMatchPwd(e.target.value)}
                        onFocus={()=>setMatchFocus(true)}
                        onBlur={()=>setMatchFocus(false)}
                    />
                    <label htmlFor="confirmPassword" className="form-label d-flex">Confirme mot de passe :
                    </label>
                </div>
                <div 
                    id="confirmnote"
                    className={matchFocus && !validMatch ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
                    role="alert"
                >
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    &nbsp;Les mots de passe doivent correspondre.
                </div> 
                <div className="d-flex justify-content-between">
                    <div className="my-4 form-text text-primary">
                    <Link className="text-decoration-none" to={link}>{msg}</Link>
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary btn-lg mt-2">Valider</button>
                    </div>
                </div>
                </form>
                <div className={!success && msgErr ? "instructions mt-2 alert alert-danger" : "offscreen d-none"} role="alert">
                    <FontAwesomeIcon icon={faInfoCircle}/> {msgErr}
                </div>
        </div>
    </div>
    );
};

export default Register;