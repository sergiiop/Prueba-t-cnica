const string = 'anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero'

const comprobePalindrome = (str) => {
  const reverseStr = str.split('').reverse().join('');
  
  if(reverseStr === str) return str
  return false
}

const isPalindrome = (string) => {
  /*const initialCompare = `${string[28]}${string[29]}${string[30]}`
  const reversedCompare = initialCompare.split('').reverse().join('')
  console.log(initialCompare)
  console.log(reversedCompare)
  console.log(string.includes(reversedCompare))
  console.log(string.indexOf(reversedCompare))
  console.log(string.indexOf(initialCompare))
  const newString = string.slice(string.indexOf(initialCompare),string.indexOf(reversedCompare)+2 )
  console.log(newString)
  
  */
  const thePalindromes = []
  
  for(let i = 0; i<string.length;i++){
    const initialCompare = `${string[i]}${string[i+1]}${string[i+2]}`
  	const reversedCompare = initialCompare.split('').reverse().join('')
    if(string.includes(reversedCompare)){
      const newString = string.slice(string.indexOf(initialCompare),string.indexOf(reversedCompare)+3 )
      if(newString.length > 3){
      	const result = comprobePalindrome(newString)
        if(result) {
        	i= i+ newString.length
          thePalindromes.push(result)
        }
      }
    }
  }
  return {
    palindromes_totales: thePalindromes.length,
    palindromes: thePalindromes
  }
}


isPalindrome(string)