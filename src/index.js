function Random(length) {
    var result = '';
    var cha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var chaLength = cha.length;

    for (var i = 0; i < length; i++) {
        result += cha.charAt(Math.floor(Math.random() *
            chaLength));
    }
    return result;

}


module.exports = Random
