import React from 'react';
import Register from "./Register";

const index = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 my-3 mb-sm-0">
                    <Register link={"/signin"} msg={"Déja un compte ?"} />
                </div>
            </div>
        </div>
    );
};

export default index;