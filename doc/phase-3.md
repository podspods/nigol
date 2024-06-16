# phase 3 Middleware

# purpose :

authorize page when loggeg
autorise page when not logged

logged/not logged is defined by the token (nigol-token)

1. define public route
   ```js
   export const publicRoute: string[] = [
     route.home.public,
     route.account.login,
     route.account.signup
   ];
   ```
1. define if token exist

   ```js
   const signupToken = request.cookies.get(SIGNUP_TOKEN!)?.value || '';

   ```

1. condition for redirection

    | public-route | token | situation                           | action                   |
    | ------------ | ----- | ----------------------------------- | ------------------------ |
    | false        | false | access by url                       | to login page            |
    | false        | true  | normal case                         | do nothing               |
    | true         | false | normal case                         | do nothing               |
    | true         | true  | logged and want to log or subscribe | redirect to private home |

1. path watching 
    ```js
    // See "Matching Paths" below to learn more
    export const config = {
      matcher: [ '/profile', '/login', '/signup', '/verifyemail']
    };

    ```
    rules on middleware will be applied in the paths in this part (config)  