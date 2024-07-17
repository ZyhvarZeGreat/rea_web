// // src/context/auth-context.js
// import React from "react";
// import { useRouter } from "next/router";

// const AuthContext = React.createContext('');
// const { Provider } = AuthContext;

// const AuthProvider = (children:{ children:React.ReactNode }) => {
//   const [authState, setAuthState] = React.useState({
//     token: "",
//   });

//   const setUserAuthInfo = (data:{ data:string }) => {
//     const token = data.data;
//     // Set the token in an HTTP-only cookie
//     document.cookie = `token=${token}; max-age=3600; path=/; secure; samesite=strict;`;
//     setAuthState({
//       token,
//     });
//   };

//   const isUserAuthenticated = () => {
//     // Check if the token exists in the HTTP-only cookie
//     const token = getCookie("token");
//     return !!token;
//   };

//   const getCookie = (name) => {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts?.pop().split(";").shift();
//   };

//   return (
//     <Provider
//       value={{
//         authState,
//         setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
//         isUserAuthenticated,
//       }}
//     >
//       {children}
//     </Provider>
//   );
// };

// export { AuthContext, AuthProvider };
