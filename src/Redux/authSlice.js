import { createSlice, current } from "@reduxjs/toolkit";

const login = {
    email: '',
    password: ''
}

// const signup = {
//     firstName: "Priya",
//     lastName: "Thakur",
//     email: "priyathakur1998@gmail.com",
//     password: "Priya@123"
// }

const signup = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const authSlice = createSlice({
    name: "authentication",
    initialState: {
        signup: signup,
        login: login,
        open: false,
        isLoggedIn: true,

    },
    reducers: {
        openLoginPage: (state, action) => {
            console.log(action.payload)
            state.open = action.payload;
        },
        closeLoginPage: (state, action) => {
            state.open = false;
        },
        openSignUpPage: (state, action) => {
            if (state.isLoggedIn) {
                state.isLoggedIn = false;
            } else {
                state.isLoggedIn = true;
            }
        },
        handleSignUpData: (state, action) => {
            const value = action.payload;
            state.signup[value.name] = value.value;
            // console.log(current(state))
        },

        // handleSignUpData: (state, action) => {
        //     const regex = /^(?=(.*[a-z]){3,}) (?=(.*[A-Z]){2,}) (?=(.*[0-9]){2,}) (?=(.*[!@#$%^&*()\-__+.]){1,}) {8,}$/;
        //     const value = action.payload;
        //     if (value.name.password) {
        //         console.log(value.name.password)
        //         const result = regex.test(value.value.password);
        //         console.log(value.value.password)
        //         console.log(result)
        //         if (result) {
        //             alert('strong password');
        //         }
        //         else {
        //             alert('password must be strong')
        //         }
        //     }
        //     state.signup[value.name] = value.value;

        //     // console.log(current(state))
        // },

        handleStoreDataInTheSessionStorage: (state, action) => {
            // const regExp = /^(?=(.*[a-z]){3,}) (?=(.*[A-Z]){2,}) (?=(.*[0-9]){2,}) (?=(.*[!@#$%^&*()\-__+.]){1,}) {8,}$/
            const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            const regExpForMail = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
            const regExpForName = /^[a-zA-Z]{4,30}$/;






            if (state.signup.email === "") {
                return alert('please enter email address')
            }
            else if (!regExpForMail.test(state.signup.email)) {
                return alert('Invalid Email')
            } else if (regExpForMail.test(state.signup.email)) {
                alert('Email is valid')
            }


            if (state.signup.password === "") {
                return alert('please enter password')
            } else if (!regExp.test(state.signup.password)) {
                return alert('Invalid Password')
            } else if (regExp.test(state.signup.password)) {
                alert('password is valid')
            }


            if (state.signup.firstName === "") {
                return alert('please enter first Name ')
            } else if (!regExpForName.test(state.signup.firstName)) {
                return alert('Invalid Name')
            } else if (regExpForName.test(state.signup.firstName)) {
                alert('Name is valid')
            }





            if (state.signup.lastName === "") {
                return alert('please enter last name')
            } else if (!regExpForName.test(state.signup.lastName)) {
                return alert('Invalid lastname')
            } else if (regExpForName.test(state.signup.lastName)) {
                alert('last name is valid')
            }








            const getDataFromSession = sessionStorage.getItem('signup');
            const signUpData = JSON.parse(getDataFromSession);

            if (signUpData) {

                if (signUpData.email === state.signup.email) {
                    // console.log(typeof signUpData.email)
                    // console.log(typeof state.signup.email)
                    alert('email already exist')
                } else {
                    const signUpData = JSON.stringify(state.signup);
                    sessionStorage.setItem('signup', signUpData);
                    alert('signup successfully')
                }
            }
            else {
                const signUpData = JSON.stringify(state.signup);
                sessionStorage.setItem('signup', signUpData);
                alert('signup successfully')
            }
        },
        handleLoginData: (state, action) => {
            const value = action.payload;
            state.login[value.name] = value.value;
            console.log(current(state));
        },

        handleAuthorizedUserLogin: (state, action) => {
            const getDataFromSession = sessionStorage.getItem('signup');
            const signUpData = JSON.parse(getDataFromSession);
            if (!signUpData) {
                alert('Please sign in first');
            } else {
                if (state.login.email === signUpData.email) {
                    console.log('email match')
                    state.login.password === signUpData.password ? alert("Login Successfully") : alert('wrong password entered')
                    console.log(state.login.password);
                    console.log(signUpData.password);
                }
                else {
                    alert('Invalid Email Address')
                }
            }

        }

    }
})


export const { openLoginPage, closeLoginPage, openSignUpPage, handleSignUpData, handleStoreDataInTheSessionStorage, handleLoginData, handleAuthorizedUserLogin } = authSlice.actions;
export default authSlice.reducer;
