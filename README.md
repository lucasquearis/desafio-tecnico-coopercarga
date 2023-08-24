# Teste prático desenvolvedor full-stack Coopercarga

## Questionário do teste do [PDF](https://github.com/lucasquearis/desafio-tecnico-coopercarga/blob/master/files/Teste%20JS%20PL_SR.pdf)

<details><summary>1. Qual a Saída do algoritmo?</summary>
<br>
   Resposta: A saída é uma série de números primos separados por páginas.
</details>
<hr>
<details>
   <summary>2. Você julga que este código é limpo? Aponte quais erros o programador
   cometeu que prejudicaram a qualidade do código. Obs: não existe nenhum bug
   escondido no código.
   </summary>
   <br>
   Resposta: O código pode ser melhorado de diversas formas, vou citar agumas delas:
   <ul>
      <li>Usar nomes de variáveis mais descritivos: o código apresenta variáveis como: "M", "RR", "CC", "ITIS". Isso dificulta muito na hora da manutenção, nomes que descrevem as variáveis são muito melhores, ajudando muito na hora do debug.</li>
      <br>
      <li>Código todo em escopo global: O código inteiro está em um escopo só no metodo "main", outra coisa que dificulta muito na hora do debug, separar o método em funções desacopladas com funções individuais, ajudam demais na hora do debug, pois você sabe exatamente onde foi que o código teve algum problema.</li>
      <br>
      <li>Código "engessado": O código possui várias variáveis "hardcoded", ou seja, com variáveis fixas, não permitindo a customização de quem precisa usar o código em mais de um lugar, na refatoração coloquei a opção de quem consumir o método, de poder definir o tamanho das páginas em listas e colunas, também permito trocar o limite máximo de números primos gerados, tornando o método muito mais dinâmico.</li>
   </ul>
</details>
<hr>
<details><summary>3. Refatore o código do arquivo utilizando conceitos de Clean Code, de maneira
que o código se torne mais limpo, legível e de fácil manutenção.</summary>
   <br>
   Resposta: Alterei o nome da classe de "DoSomething" para "PrimeNumbers", para melhor descrição da classe, mantive o método "main" original para comparações, criei 3 novos métodos "primesDictionary", "buildPrimeNumbers" e "printPrimeNumbersPages"
   <br>
O caminho para o arquivo é esse:
["files/main.js"](https://github.com/lucasquearis/desafio-tecnico-coopercarga/blob/master/files/main.js)

</details>
<hr>
