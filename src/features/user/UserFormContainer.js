import React, { useState } from "react";
import { UserSignupForm } from "../../components/User/UserSignupForm";
import { RegistrationForm } from "../../features/user/RegistrationForm";

const UserFormContainer = () => {
    const [currentFormType, setCurrentFormType] = useState("login");

    const toggleCurrentFormType = (newFormType) => {
        setCurrentFormType(newFormType);
    };

    return (
        <div>
            {currentFormType === "login" ? (
                <UserSignupForm
                    toggleCurrentFormType={toggleCurrentFormType}
                    closeForm={() => setCurrentFormType(null)}
                />
            ) : (
                <RegistrationForm
                    toggleCurrentFormType={toggleCurrentFormType}
                    closeForm={() => setCurrentFormType(null)}
                />
            )}
        </div>
    );
};

export default UserFormContainer;
