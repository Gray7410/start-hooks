import React from "react";
import CardWrapper from "../common/Card";
const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const onLogin = () => {
        localStorage.setItem("user", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("user", "token");
    };
    return (
        <>
            <CardWrapper>
                <Component
                    {...props}
                    onLogOut={onLogOut}
                    onLogin={onLogin}
                    isAuth={isAuth}
                />
            </CardWrapper>
        </>
    );
};

export default withFunctions;
