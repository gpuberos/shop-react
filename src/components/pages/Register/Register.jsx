import { useState } from "react";
import { Navigate, Link } from "react-router-dom"

const Register = ({link, msg}) => {

    const [user, setUser] = useState(false)

    const UserRegex = /^[a-zA-Z][a-zA-Z0-9-]{3,23}$/;
    const PasswordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@&#$%]).{8,23}$/;
    const EmailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;
    
    // Pour pouvoir accès aux 3 états on met async : attente, validation et rejet
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;
        const password = e.target.elements.password.value;
        const confirmPassword = e.target.elements.confirmPassword.value;
    }

    return (
        <div className="card">
            {user && <Navigate to="/account" replace={true} />}
            <div className="card-body">
                <h1 className="card-title">Inscription</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nom d'utilisateur</label>
                        <input type="text" name="username" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Numéro de téléphone</label>
                        <input type="tel" name="phone" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mot de passe</label>
                        <input type="password" name="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmer le mot de passe</label>
                        <input type="text" name="confirmPassword" className="form-control" />
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