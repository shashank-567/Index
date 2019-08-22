    let removeVowelsAndSpaces = function(givenString)
    {
    // start your code here.
    var result = '';
    for (let i =0 ; i<givenString.lenght;i++){


    result = givenString.charAt(i).replace(/[aeiou]/gi, '');
    }
    return result;
    };

    var Rm = removeVowelsAndSpaces("arijit kumar");
    console.log

    (Rm);