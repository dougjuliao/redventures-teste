# RedVentures Teste
Reproduzir a página fornecida pela RedVentures.
### Tecnologias | Ferramentas | Libs utilizadas
##### Ferramentas
* [Windows](https://www.microsoft.com/pt-br/windows/) - Sim, atualmente trabalho com windows gostaria de utilizar um mac mas por enquanto o windows atende as minhas necessidades, eu poderia utilizar o linux, mas como utilizo bastante o photoshop eu preferi ficar no windows mesmo.
* [SublimeText3](https://www.sublimetext.com/3) - O editor que mais gosto de utilizar, consigo fazer tudo que preciso nele, já utilizei vscode,atom,notepad++,phpstorm entre outros, mas o que sempre consegui maior desempenho foi o sublime.
##### Tecnologia e Lib/Framework
* [NodeJs](https://nodejs.org/en/) - Utilizo ele mais para baixar dependências, executar algum automatizador ou abrir um servidor local simples como por exemplo http-serve.
* [VueJs](https://vuejs.org/) - Lib/Framework principal da página, escolhi ele por ser agradável tanto para codificar quanto para olhar a estrutura de tudo, e atualmente está ganahando um grande peso positivo na comunidade.
##### Técnica Utilizada
* MobileFirst - Acho interessante citar aqui, abordei esse conceito para o desenvolvimento da página na verdade como um aprendizado, eu sempre criava os layouts do maior para o menor, mas ultimamente estava fazendo alguns estudos sobre o assunto e vi que o código fica um tanto quanto mais simples, pois tratamos algumas coisas como default e utilizamos os mediaqueries de uma maneira mais inteligente. (Me perdoem pelos !important do css, eu acabei adicionando pois acredito ter feito em uma estrutura errada do que deveria).
### Instalação dos componentes para desenvolvimento
* Instalar o [NodeJs](https://nodejs.org/en/) - Para poder utilizar o [Npm](https://www.npmjs.com/) gerenciador de dependências.
* [Vue-cli](https://github.com/vuejs/vue-cli) - Eu optei por baixar globalmente mas no projeto também adicionei no package.json para poder executar apenas o npm install e utilizar tudo de la.
    ``` bash
    npm install vue-cli -g
    ```
* [Vue-carousel](https://ssense.github.io/vue-carousel/) - Component do vue é basicamente um carousel responsivo.
    ``` bash
    npm install --save vue-carousel
    ```
* [Axios](https://github.com/mzabriskie/axios) - Para request do JSON fornecido, optei por utilizar o axios que retorna promises e é bem simples de utilizar.
    ``` bash
    npm install --save axios
    ```
* [Normalize.css](https://necolas.github.io/normalize.css/) - Gosto de utilizar o normalize por ajudar na padronização do css.
    ``` bash
    npm install --save normalize.css
    ```
### Executar o projeto
Antes de tudo, é necessário executar o npm install para baixar as dependências salvas:
``` bash
npm install
```
##### Desenvolvimento e Build
Para executar o ambiente de desenvolvimento e buildar o projeto basta apenas executar o run do vue:
```bash
# Será executado no localhost:8080
npm run dev

# O build irá gerar os arquivos necessários para produção ele estará na pasta dist e será preciso executar o index.html dentro de um server local
npm run build
```