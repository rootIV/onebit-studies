function normalizarNumeroTelefone(numeroTelefoneString) {
     /** @type {string} */
    const numeroNormalizado = numeroTelefoneString.replace(/[\sa-zA-Z]/g, "");
    this.codigoPais = numeroNormalizado.match(/(?<=\+)\d{1,3}/)[0];
    this.ddd = numeroNormalizado.match(/(?<=\()\d+(?=\))/)[0];
    this.numero = numeroNormalizado.match(/(?<=\)\d?)\d+/)[0];
}

console.log(new normalizarNumeroTelefone("+55 (86) 9 CHORAO 1234 AS ROSAS 1234"));
