import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/index';
import { thunkLogin, thunkSignup } from '@/thunk/auth/thunk';
import { errorReset, errorSet } from '@/store/error/actions';
import { IError } from '@/store/error/models';
import HomeView from './Home.View';

interface HomeContainerProps {
    token: string;
    error: IError;
    handleSetError: (error: IError) => void;
    handleResetError: () => void;
    login: (email: string, password: string) => void;
    signup: (email: string, password: string) => void;
}

export interface LoginInputParams {
    email: string;
    password: string;
}

export interface SignupInputParams {
    email: string;
    password: string;
    confirmed: string;
}

const HomeContainer: React.FC<HomeContainerProps> = ({
    error,
    login,
    handleSetError,
    handleResetError,
    signup,
}) => {
    //login input params
    const [loginInput, setLoginInput] = useState<LoginInputParams>({
        email: '',
        password: '',
    });
    //signup input params
    const [signupInput, setSignupInput] = useState<SignupInputParams>({
        email: '',
        password: '',
        confirmed: '',
    });
    // password memorise state
    const [checked, setChecked] = React.useState(false);

    const handleOnChangeLoginInput = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.currentTarget;
        const tempParams: LoginInputParams = {
            ...loginInput,
            [name]: value,
        };
        setLoginInput(tempParams);
    };

    const handleOnChangeSignupInput = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.currentTarget;
        const tempObj: SignupInputParams = {
            ...signupInput,
            [name]: value,
        };
        setSignupInput(tempObj);
    };

    const handleToggleChecked = () => {
        setChecked(prevState => !prevState);
    };

    const handleLogin = () => {
        login(loginInput.email, loginInput.password);
    };

    const handleSignup = () => {
        if (signupInput.password !== signupInput.confirmed) {
            const errorObj: IError = {
                hasError: true,
                errorType: 'invalid password/confirmed',
                errorMessage: 'パスワードと確認用パスワードが一致しません',
            };
            handleSetError(errorObj);
        } else {
            signup(signupInput.email, signupInput.password);
        }
    };

    return (
        <HomeView
            error={error}
            checked={checked}
            loginInput={loginInput}
            signupInput={signupInput}
            handleOnChangeLoginInput={handleOnChangeLoginInput}
            handleOnChangeSignupInput={handleOnChangeSignupInput}
            handleToggleChecked={handleToggleChecked}
            handleLogin={handleLogin}
            handleResetError={handleResetError}
            handleSignup={handleSignup}
        />
    );
};

const MapStateToProps = (store: RootState) => {
    return {
        token: store.session.token,
        error: store.error,
    };
};
const MapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, null, AnyAction>,
) => {
    return {
        login: (email: string, password: string): void => {
            dispatch(thunkLogin(email, password));
        },
        signup: (email: string, password: string): void => {
            dispatch(thunkSignup(email, password));
        },
        handleResetError: (): void => {
            dispatch(errorReset());
        },
        handleSetError: (error: IError) => {
            dispatch(errorSet(error));
        },
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(HomeContainer);
