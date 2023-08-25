# Teste prático desenvolvedor full-stack Coopercarga

## Questionário do teste do [PDF](https://github.com/lucasquearis/desafio-tecnico-coopercarga/blob/master/files/Teste%20JS%20PL_SR.pdf)

<details><summary>1. Qual a Saída do algoritmo?</summary>
<br>
   <p>Resposta: A saída é uma série de números primos separados por páginas.</p>
</details>
<hr>
<details>
   <summary>2. Você julga que este código é limpo? Aponte quais erros o programador
   cometeu que prejudicaram a qualidade do código. Obs: não existe nenhum bug
   escondido no código.
   </summary>
   <br>
   <p>Resposta: O código pode ser melhorado de diversas formas, vou citar agumas delas:</p>
   <ul>
      <li>Usar nomes de variáveis mais descritivos: o código apresenta variáveis como: "M", "RR", "CC", "ITIS". Isso dificulta muito na hora da manutenção, nomes que descrevem as variáveis são muito melhores, ajudando muito na hora do debug.</li>
      <br>
      <li>Código todo em escopo global: O código inteiro está em um escopo só no metodo "main", outra coisa que dificulta muito na hora do debug, separar o método em funções desacopladas com funções individuais, ajudam demais na hora do debug, pois você sabe exatamente onde foi que o código teve algum problema.</li>
      <br>
      <li>Código "engessado": O código possui várias variáveis "hardcoded", ou seja, com variáveis fixas, não permitindo a customização de quem precisa usar o código em mais de um lugar, na refatoração coloquei a opção de quem consumir o método, poder definir o tamanho das páginas em listas e colunas, também permitindo trocar o limite máximo de números primos gerados, tornando o método muito mais dinâmico.</li>
   </ul>
</details>
<hr>
<details><summary>3. Refatore o código do arquivo utilizando conceitos de Clean Code, de maneira
que o código se torne mais limpo, legível e de fácil manutenção.</summary>
   <br>
   <p>Resposta: Alterei o nome da classe de "DoSomething" para "PrimeNumbers", para melhor descrição da classe, mantive o método "main" original para comparações, criei 3 novos métodos "primesDictionary", "buildPrimeNumbers" e "printPrimeNumbersPages".</p>
   <p>O caminho para o arquivo é esse: <a href="https://github.com/lucasquearis/desafio-tecnico-coopercarga/blob/master/files/main.js">files/main.js</a></p>

</details>
<hr>
<details><summary>4. Explique como o conceito de middlewares no Express.js pode ser utilizado para
evitar repetição de código.
.</summary>
   <br>
   <p>Resposta: Imagine que cada requisição HTTP da aplicação seja composta por uma torre de legos, onde existam a entrada que é a base dessa torre, e a saída, onde é o topo dessa torre. Cada peça ou lego dessa torre, é um middleware, uma peça do código que pode ser fácilmente utilizada em outras rotas, ou seja, em outras requisições, um middleware tem acesso a todos os dados de entrada e saída da requisição, por isso é comum utilizarmos middlewares para controlar validações e autenticações.</p>
   <p>Um middleware de autenticação, pode ser utilizado em várias rotas em que são necessárias tais autenticações, o mesmo acontece com um middleware de erro, que pode ser utilizada apenas um na aplicação toda, contemplando todos os erros possíveis.</p>
</details>
<hr>
<details><summary>5. Tendo em vista duas abordagens de backend: uma utilizando um ORM (como
Prisma e Sequelize) e outra utilizando apenas um query builder (como o Knex),
quais as vantagens e desvantagens de cada abordagem?
.</summary>
<br>
   <p>Resposta: </p>
      <h4>ORM</h4>
   <ul>
      <li><b>Vantagens:</b></li>
      <li>Abstração, ele abstrai o máximo do banco de dados, automazitando relacionamentos e processos deixando fácil o processo de comunicação da aplicação com o banco de dados, o que aumenta a produtividade e tempo para pensar melhor na aplicação.</li>
      <li>Migrations, geralmente a ORM tem um sistema de migrações, a qual identificam alterações na arquitetura do banco de dados com base no código do desenvolvedor.</li>
      <li>Portabilidade, como também no query builder, fca muito mais fácil fazer alteração de banco, pois os métodos são basicamente os mesmos, ao trocar de um PostgreSQL para um MySQL por exemplo.</li>
      <li><b>Desvantagens:</b></li>
      <li>Desempenho, em alguns cenários o desempenho do ORM não é bem otimizado, fazendo com que uma simples consulta traga muita complexidade para a operação.</li>
      <li>Abstração, o que também é uma vantagem, pode se tornar uma desvantagem, já que a ORM abstrai tanto que pode inpedir com que o desenvolvedor entenda seu banco de dados e dificulte a depuração, a mudança de paradigmas ou o aumento do desempenho.</li>
      <li>Lentidão, em geral a ORM costuma ser mais lenta do que outras alternativas, especialmente em consultas complexas.</li>
   </ul>
   <h4>Query Builder</h4>
   <ul>
      <li><b>Vantagens:</b></li>
      <li>Facilidade de gerenciamento, como a query builder utiliza métodos ou funções para interagr com o banco, acaba sendo mais prático para o desenvolvedor utilizar as funções do query builder que já está pré configurada para isso.</li>
      <li>Comunicação manual com o Banco, existe a possibilidade de escrever consultas manualmente, ou seja, com strings, é uma ótima opção para quem tem conhecimento em banco de dados para solucionar algum problema.</li>
      <li>Suporte a vários bancos, com apenas algumas diferenças entre bancos SQL, fazer a troca de banco de dados acaba sendo uma tarefa mais simples, pois os métodos em grande maioria são os mesmos</li>
      <li><b>Desvantagens:</b></li>
      <li>Conhecimento em SQL, utilizar um query builder, exige que o desenvolvedor conheça o que são os bancos de dados e seus relacionamentos em SQL</li>
      <li>Relacionamento dos dados, os relacionamentos não são automatizados, isso quer dizer que o desenvolvedor tem que saber muito bem como é o relacionamento do banco para poder fazer a aplicação se comunicar com o DB.</li>
   </ul>
   <a href="https://www.prisma.io/dataguide/types/relational/comparing-sql-query-builders-and-orms">Referências.</a></p>
</details>
<hr>
<details><summary>6. Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não podem haver resultados repetidos.
</summary>
<br>
   <p>Resposta:</p>

```mysql
SELECT DISTINCT j1.nome, j2.nome
FROM Partidas p1
JOIN Partidas p2 ON p1.jogador1_id = p2.jogador1_id AND p1.jogador2_id = p2.jogador2_id
JOIN Jogador j1 ON p1.jogador1_id = j1.id
JOIN Jogador j2 ON p1.jogador2_id = j2.id
WHERE p1.id <> p2.id
      AND p1.pontos_jogador2 + p2.pontos_jogador2 > 30
      AND p1.duracao > 90 AND p2.duracao > 90;
```

</details>
<hr>
