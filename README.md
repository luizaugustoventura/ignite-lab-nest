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
    <li>Apache Kafka</li>
</ul>

<h4>📜️Instruções: 📜️</h4>
<ul>
    <li>
        Antes de executar a aplicação, criar o arquivo <b>.env</b>, com base no <b>.env.example</b>
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