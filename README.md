# toAlternateCase
A JavaScript function that extends the String Prototype ([bad practice, don't use this in production](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Bad_practice_Extension_of_native_prototypes)).

## Code:
```javascript
String.prototype.toAlternateCase = function(){
    let r = "";
    for (let i = 0; i < this.length; i++) {
        r += i%2 == 1 ? this[i].toUpperCase() : this[i].toLowerCase();
    }
    return r;
}
```

## Usage:
Add the code to your project (not recommended) and run it on a string:

```javascript
"Lorem ipsum dolor sit amet, consectetur adipiscing elit".toAlternateCase()
// => `"lOrEm iPsUm dOlOr sIt aMeT, cOnSeCtEtUr aDiPiScInG ElIt"`
```

__eNjOy yOuR NeW StRiNgS iN aLtErNaTe cAsE__

![](https://user-images.githubusercontent.com/5780704/89944710-8d8b4400-dc20-11ea-8126-cb043aa16cf9.png)
