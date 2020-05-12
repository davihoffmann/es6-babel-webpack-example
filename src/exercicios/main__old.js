class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {

    constructor() {
        super();
        this.usuario = "Davi";
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

}

var MinhaLista = new TodoList();
document.getElementById('novotodo').onclick = function() {
    MinhaLista.add("Nova todo");
}

MinhaLista.mostraUsuario();



//REST
function soma (a, b, ...params) {
    return params;
}

console.log(soma(1, 3, 4, 4, 5, 6, 7));


//SPREAD

const usuario1 = {
    nome: 'Davi',
    idade: 23,
    empresa: 'Unidavi',
};

const usuario2 = {...usuario1, nome: 'Gabriel'};

console.log(usuario2);



