# phase 1: création des composants


1. [basic component](#basic-component--atom)
    1. [Button](#button)
    1. [Label](#label)
    1. [Input](#input)
1. [container composant](#container-composant--organisme)

# basic component  (atom)
## button
role : do not contains any logic

button should have as standard button: 
component is just a decoration 
```js
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
export default function Button({
  children,
  ...props
}: ButtonProps) {
  return (
    <>
      <button {...props}  
      className='bg-transparent font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded p-10 m-1 disabled:cursor-not-allowed'  >
        {children}
      </button>
    </>
  );
}

```

# Label 

pink if message : else opacity = 0 
```js
type LabelProps = React.ButtonHTMLAttributes<HTMLInputElement> & {};
export default function Label({ value, ...props }: LabelProps) {
  const bgColor = value === '' ? 'opacity-0' : 'bg-pink';
  const className = 'rounded font-semibold  p-1 m-1 ' + bgColor;
  return (
    <>
      <input {...props} type='text' readOnly className={className} value={value} />
    </>
  );
}
```

# input


# container composant : organisme
## subscribe-box

check username : minimim 6 chars
check email : html check
check password : lettre + chiffre + longueur 6
différentien l'input en erreur


button sumit grayed si les checks ne sont pas true 

ajouter un lien vers login (dnas le cas ou l'utilisateur a déja un compte )

submit enregistre dans la base (email = key )


1. login-box
1. profile-box
