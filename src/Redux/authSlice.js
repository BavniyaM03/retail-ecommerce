import { createSlice, current } from "@reduxjs/toolkit";

const userFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const authSlice = createSlice({
    name: "authentication",
    initialState: {
        userFormValues: userFormValues,
        open: false,
        isLoggedIn: true,
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
                return alert('please enter email address')
            }
            else if (!regExpForMail.test(state.userFormValues.email)) {
                return alert('Invalid Email')
            } else if (regExpForMail.test(state.userFormValues.email)) {
                alert('Email is valid')
            }


            if (state.userFormValues.password === "") {
                return alert('please enter password')
            } else if (!regExp.test(state.userFormValues.password)) {
                return alert('Invalid Password')
            } else if (regExp.test(state.userFormValues.password)) {
                alert('password is valid')
            }


            if (state.userFormValues.firstName === "") {
                return alert('please enter first Name ')
            } else if (!regExpForName.test(state.userFormValues.firstName)) {
                return alert('Invalid Name')
            } else if (regExpForName.test(state.userFormValues.firstName)) {
                alert('Name is valid')
            }

            if (state.userFormValues.lastName === "") {
                return alert('please enter last name')
            } else if (!regExpForName.test(state.userFormValues.lastName)) {
                return alert('Invalid lastname')
            } else if (regExpForName.test(state.userFormValues.lastName)) {
                alert('last name is valid')
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
