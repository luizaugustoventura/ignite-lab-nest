<h1 align="center">🧪️Ignite Lab - NestJS🔛️</h1>

<h3 align="center">🔔️Microserviço especializado em notificações🔔️</h3>

<p>
    Projeto criado com base no evento Ignite Lab, ocorrido em dezembro de 2022 e idealizado pela 
    <a href="https://www.youtube.com/@rocketseat" style="text-decoration: none;">Rocketseat</a>.
</p>

<h4>🛠Ferramentas e tecnologias: 🛠</h4>
<ul>
    <li>NestJS</li>
    <li>Prisma ORM</li>
    <li>TypeScript</li>
    <li>Jest</li>
    <li>Docker</li>
    <li>Apache Kafka</li>
</ul>

<h4>📜️Instruções: 📜️</h4>
<ul>
    <li>
        Antes de executar as aplicações, criar os arquivos <b>.env</b> para o <b>app</b> e o <b>kafka-producer-helper</b>, com base no <b>.env.example</b> de cada um deles
    </li>
    <li>
        Ao usar o Kafka com Docker, lembrar de remover as propriedades <code>sasl</code> e <code>ssl</code> dos arquivos <a href="app/src/infra/messaging/kafka/kafka-consumer.service.ts">kafka-consumer.service.ts</a> e <a href="kafka-producer-helper/producer.js">producer.js</a>, já que a autenticação não será necessária
    </li>
</ul>



<h5>😼️Comandos da aplicação NestJS: 😼️</h5>
<ul>
    <li>
        Executar a aplicação em modo desenvolvimento: <code>npm run start:dev</code>
    </li>
    <li>
        Executar os testes no modo watch: <code>npm run test:watch</code>
    </li>
</ul>

<h5>💾️Comandos do Prisma: 💾️</h5>
<ol>
    <li>
        <code>npx prisma init --datasource-provider SQLite</code> inicia a conexão com o banco de dados e seleciona o tipo de banco (neste caso, SQLite)
    </li>
    <li>
        <code>npx prisma migrate dev</code> executa uma migration para atualizar o banco de dados de acordo com o <a href="app/prisma/schema.prisma">schema.prisma</a></b>
    </li>
    <li>
        <code>npx prisma studio</code> abre a interface gráfica do Prisma para inspecionar o banco de dados
    </li>
</ol>

<h5>📨️Comandos do Kafka Producer Helper (em Node): 📨️</h5>
<ul>
    <li>
        Enviar uma mensagem/evento: <code>node producer.js</code>
    </li>
</ul>

<h5>🐋️Comandos do Docker: 🐋️</h5>
<ul>
    <li>
        Iniciar o container Kafka e suas dependências: <code>docker compose up</code>
        </br>
        <i>Obs: O container Kafka estará disponível através da porta 9094</i>
    </li>
</ul>