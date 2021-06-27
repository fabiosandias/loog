# Projeto criado com `create-react-app` usando typescript

Esse projeto tem como principal objetivo mostrar os usuários de uma organização do github. A interface permite o usuário escolher o grupo que ele deseja fazer a busca: (Facebook, Angular e Vuejs).

Por padrão ele Busca o grupo do Facebook.

Por configuração, permitir o carregamento de 5 resultados por página.
No final da página existe um botão para poder carregar mais resultados, e ele acrescenta mais 5.

Listado os resultados, o usuário pode ver o perfil no próprio git, no link `ver perfil no git`, ou pode clicar no botão para abrir um mosal que detalha as informações requisitadas no requisito.  `incluir informações a mais além do que foi pedido.`

E no campo de busca existe um filho para os usuário já listados.
Esse filtro não busca ná API do GITHUB, ele filtra o objeto em memória.

Como extra, eu coloquei a página de login e tambem a opção de escolher a cor do tema, usando context api do react.
## Instruções para rodar o projeto

Entre dentro do projeto e rode:
### `yarn` para instalar as dependências.
Depois de instaladas rode o comando abaixo:
### `yarn start` para iniciar a aplicação

O aplicativo irá executar na parta 3000 caso não esteja sendo ultilizada, senão, ele irá sugerir outra porta.
Para ver o projeto abra: [http://localhost:3000](http://localhost:3000) em seu navegador.

### Atenção
Para entrar no sistema o usuário e senha é:
email: `teste@teste.com.br`
senha: `123`

Por padrão os dados do usuário ja vem carregado no input da tela de login.
Basta somente clicar em `Entrar`

Para realizar um build em produção, execute o compando abaixo
### `yarn build`

Ele irá compilar o aplicativo para produção na pasta `build`. \
agrupando corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.



