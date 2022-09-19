function palindrome(str) {
  let spli = str.split(/[[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
  let org= spli.join("").split(" ").join("");
  let rev = org.split("").reverse().join("")
  if(rev.toLowerCase() ===org.toLowerCase())
  {
    return true;
  }
  else
  {
    return false;
  }
  
}

console.log(palindrome("race car"))