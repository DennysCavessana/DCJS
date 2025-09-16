function ehPalindromo(palavra){
    palavra = palavra.toLoweCase().replace(/\s/g,"");
    let invertida = palavra.split("").reverse().join("");
    return palavra === invertida;
    
}