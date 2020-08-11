String.prototype.toAlternateCase = function(){
    let r = "";
    for (let i = 0; i < this.length; i++) {
        r += i%2 == 1 ? this[i].toUpperCase() : this[i].toLowerCase();
    }
    return r;
}
