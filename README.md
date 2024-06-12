# Word Repetition Analyzer

Este projeto é uma biblioteca que analisa repetições de palavras por paragrafos. Ele lê um arquivo de texto, conta a frequência de cada palavra e salva o resultado em um novo arquivo.

## Dependências

O projeto utiliza as seguintes dependências:

- [chalk](https://www.npmjs.com/package/chalk): Uma biblioteca para estilizar a saída do console.
- [commander](https://www.npmjs.com/package/commander): Uma biblioteca completa para escrever comandos de linha de comando node.js.
- [fs](https://nodejs.org/api/fs.html): Módulo nativo do Node.js para manipulação de arquivos.
- [path](https://nodejs.org/api/path.html): Módulo nativo do Node.js para manipulação de caminhos de arquivos.

## Como executar o projeto

Para executar o projeto, você precisa ter o Node.js instalado em sua máquina.

1. Clone este repositório em sua máquina local usando `git clone`.

2. Navegue até a pasta do projeto usando `cd 01-javascript-com-nodejs-criando-sua-primeira-biblioteca`.

3. Instale todas as dependências necessárias usando `npm install`.

4. Execute o projeto usando o comando `node src/cli.js -t [caminho_do_arquivo] -d [caminho_de_destino]`.

   Por exemplo: `node src/cli.js -t ./text.txt -d ./results`

   Onde:
   - `-t` ou `--text`: É o caminho do arquivo de texto a ser processado.
   - `-d` ou `--destiny`: É o caminho onde o arquivo de resultado será armazenado.

Se tudo for feito corretamente, você verá a mensagem "Texto processado com sucesso!" no console. E o arquivo de resultado será salvo no caminho especificado.

## Licença

Este projeto está licenciado sob a licença ISC.
