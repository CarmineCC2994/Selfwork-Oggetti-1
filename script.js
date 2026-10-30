const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 25,

    presentati: function() {
        return `Ciao, sono ${this.nome} ${this.cognome} ed ho ${this.eta} anni`;
    }
};

console.log(persona.presentati());