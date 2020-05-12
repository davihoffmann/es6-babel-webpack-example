class Usuario {
    constructor(email, senha) {
        this.email;
        this.senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123'); 
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false 
console.log(Adm1.isAdmin()) // true

// 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, 
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' }, 
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const arrIdade = usuarios.map((usuario) => usuario.idade);
console.log(arrIdade);

const arrFilter = usuarios.filter((usuario) => {
    if(usuario.empresa == 'Rocketseat' & usuario.idade > 18) {
        return true;
    }
});
console.log(arrFilter);


const arrFind = usuarios.find((usuario) => {
    return usuario.empresa == 'Google';
});
console.log(arrFind);

const arrOperacoes = usuarios.map((usuario) => {
    usuario.idade = usuario.idade * 2;
    return usuario;
}).filter((usuario) => {
    if(usuario.idade < 50) {
        return true;
    }
});
console.log(arrOperacoes);

//3
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => { 
    return usuario.idade;
};
console.log(mostraIdade(usuario));


// 3.3
// Dica: Utilize uma constante pra function
//const nome = "Diego"; 
//const idade = 23;
//const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
//console.log(mostraUsuario(nome, idade));
//console.log(mostraUsuario(nome));

// 4

const empresa = { 
    nome: 'Rocketseat', 
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

 const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome); // Rocketseat 
console.log(cidade); // Rio do Sul 
console.log(estado); // sc