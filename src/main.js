class App {

    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'es6-babel-webpack-example',
            description: 'Projeto de exemplo de um projeto es com babel e webpack',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/davihoffmann/es6-babel-webpack-example',
        });

        console.log(this.repositories);
    }
}

new App();