# phase 2 - API 


1. [login](#login)
1. [subscribe](#subscribe)
1. [profile](#profile)
1. [logout](#logout)
1. [verifyMail](#verifymail)
1. [sent activation](#activate)


route directory : /src/app/api/account

```sh
npm i axios react-hot-toast bcryptjs nodemailer jsonwebtoken
```
type script 
```sh
npm i --save-dev @types/bcryptjs  @types/nodemailer @types/jsonwebtoken
```


# login
/src/app/api/account/login/route.ts
check user + pass + activte 


=> ok  create token on browser + redirect to /home/private
if user or pass not ok => message error + counter error + retry
if user not activate  => ask for activation or resend mail activation 


# subscribe
/src/app/api/account/subscribe/route.ts

check user valide => 8 char 
check email valide => html5 check
check pass valide => 8 char 2 uppdercase, 2 lowercase, 2 number 
send email for activation 


# profile
/src/app/api/account/profile/route.ts
# logout
/src/app/api/account/logout/route.ts
delete user token on browser 
# verifyMail
/src/app/api/account/verifyMail/route.ts
check if token exist in database if yes set the user to isverify = true


# activate
/src/app/api/account/activate/route.ts

resent and email with new token to activate 



# note
utilisation de mailtrap 
user emile.cda@gmail.com