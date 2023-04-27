function palindromeChecker  (arr){
    arr.forEach(element => {
        element = element.toLowerCase();
        element = element.replace(/\s/g,'');
        reverseString = element
        .split('').
        reverse()
        .join('');
      
        if(element == reverseString){

        }
        
    });


}
palindromeChecker(["Phan Van Hoai Nam","Be keep going with Nam"]);