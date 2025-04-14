import { createSlice, current } from "@reduxjs/toolkit";

const userFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const validation = {
    email_validation: '',
    first_name_validation: '',
    last_name_validation: '',
    password_validation: '',
}



const authSlice = createSlice({
    name: "authentication",
    initialState: {
        userFormValues: userFormValues,
        open: false,
        isLoggedIn: true,
        validation: validation
    },
    reducers: {

        loginPopupVisible: (state) => {
            state.open ? state.open = false : state.open = true;
        },

        openSignUpPage: (state) => {
            state.isLoggedIn ? state.isLoggedIn = false : state.isLoggedIn = true;
        },

        setLoginSignupFormValues: (state, action) => {
            const userInput = action.payload;
            state.userFormValues[userInput.name] = userInput.value;
        },

        handleStoreDataInTheSessionStorage: (state, action) => {
            const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            const regExpForMail = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
            const regExpForName = /^[a-zA-Z]{4,30}$/;

            if (state.userFormValues.email === "") {
                state.validation.email_validation = 'please enter email address';
                return;
            }
            else if (!regExpForMail.test(state.userFormValues.email)) {
                state.validation.email_validation = 'Invalid email address';
                return;
            }

            if (state.userFormValues.firstName === "") {
                state.validation.first_name_validation = 'please enter first Name'
                return;
            } else if (!regExpForName.test(state.userFormValues.firstName)) {
                state.validation.first_name_validation = 'Invalid Name'
                return;
            }

            if (state.userFormValues.lastName === "") {
                state.validation.last_name_validation = 'please enter last name';
                return;

            } else if (!regExpForName.test(state.userFormValues.lastName)) {
                state.validation.last_name_validation = "Invalid Lastname";
                return;
            }

            if (state.userFormValues.password === "") {
                state.validation.password_validation = "Please enter password";
                return;
            } else if (!regExp.test(state.userFormValues.password)) {
                state.validation.password_validation = 'Password must be strong';
                return;
            }
            
            const getDataFromSession = sessionStorage.getItem('signup');
            const signUpData = JSON.parse(getDataFromSession);

            if (signUpData) {

                if (signUpData.email === state.userFormValues.email) {
                    alert('email already exist')
                } else {
                    const signUpData = JSON.stringify(state.userFormValues);
                    sessionStorage.setItem('signup', signUpData);
                    alert('signup successfully')
                }
            }
            else {
                const signUpData = JSON.stringify(state.userFormValues);
                sessionStorage.setItem('signup', signUpData);
                alert('signup successfully')
            }
        },

        handleAuthorizedUserLogin: (state) => {
            const getDataFromSession = sessionStorage.getItem('signup');
            const signUpData = JSON.parse(getDataFromSession);
            if (!signUpData) {
                alert('Please sign in first');
            } else {
                if (state.userFormValues.email === signUpData.email) {
                    state.userFormValues.password === signUpData.password ? alert("Login Successfully") : alert('wrong password entered')
                }
                else {
                    alert('Invalid Email Address')
                }
            }

        }

    }
})


export const { loginPopupVisible, openLoginPage, closeLoginPage, openSignUpPage, handleSignUpData, handleStoreDataInTheSessionStorage, handleLoginData, handleAuthorizedUserLogin, setLoginSignupFormValues } = authSlice.actions;
export default authSlice.reducer;
