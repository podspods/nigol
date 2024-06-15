export function uniqueId(): string {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).slice(2, 9);
  return dateString + randomness;
}


export function  isPasswordComplex  (password: string | undefined): boolean {
  if (!password) return false;
  // Vérifie la longueur minimale
  if (password.length < 8) return false;
  // Vérifie la présence de lettres majuscules et minuscules et de chiffres
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasUpperCase && hasLowerCase && hasNumber;
};



export function isUsernameValide ( username : string) : boolean {

const result = username.length >=8 ; 
console.log('isUsernameValide ==>', result);

return username.length >=8 

}