class Foo {
    name = "";
    age = 0;
    height = 1.0;
    constructor(nome, idade, peso) {
        this.name = nome;
        this.age = idade;
        this.height = peso;
    }
    showInfos() {
        console.log("Nome: " + this.name);
        console.log("Idade: " + this.age);
        console.log("Peso: " + this.height);
    }
}
let person = new Foo("cururu", 23, 25.6);
person.showInfos();
