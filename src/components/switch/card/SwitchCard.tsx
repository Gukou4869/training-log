import { LoginInputParams, SignupInputParams } from "@/screens/home/Home.Interface";
import { IError } from "@/store/error/models";
import { AnimatePresence } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import LoginCard from "../../card/login/LoginCard";
import SignupCard from "../../card/signup/SignupCard";
import styles from "./SwitchCard.module.scss";

interface SwitchCardProps {
    error: IError;
    checked?: boolean;
    loginInput: LoginInputParams;
    signupInput: SignupInputParams;
    handleChecked?: () => void;
    handleGoogleAuth?: () => void;
    handleOnChangeLoginInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnChangeSignupInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleLogin?: () => void;
    handleResetError: () => void;
    handleSignup?: () => void;
}

const SwitchCard: React.VFC<SwitchCardProps> = ({
    error,
    checked,
    handleChecked,
    handleOnChangeLoginInput,
    handleOnChangeSignupInput,
    handleGoogleAuth,
    handleLogin,
    handleResetError,
    handleSignup,
}) => {
    // switch login and sign up
    const [toggleCard, setToggleCard] = useState<boolean>(true);

    const handleToggleCard = (): void => {
        setToggleCard((prevState: boolean) => !prevState);
    };
    return (
        <div className={styles.toggleCard}>
            <AnimatePresence initial={false} exitBeforeEnter>
                {toggleCard && (
                    <LoginCard
                        key={1}
                        checked={checked}
                        error={error}
                        handleChecked={handleChecked}
                        handleOnChange={handleOnChangeLoginInput}
                        handleGoogleLogin={handleGoogleAuth}
                        handleResetError={handleResetError}
                        moveToSignup={handleToggleCard}
                        handleSubmit={handleLogin}
                    />
                )}
                {!toggleCard && (
                    <SignupCard
                        key={2}
                        error={error}
                        moveToLogin={handleToggleCard}
                        handleGoogleSignup={handleGoogleAuth}
                        handleOnChange={handleOnChangeSignupInput}
                        handleResetError={handleResetError}
                        handleSubmit={handleSignup}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default SwitchCard;
