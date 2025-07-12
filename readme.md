# 🌿 FloraAPI

Uma API simples e divertida desenvolvida com **Node.js + Express**, onde você cuida de uma planta virtual através de requisições HTTP.  
Você pode **regar**, **dar sol**, **ver o estado da planta**, **ver o histórico de cuidados** e até **deletá-la**. Ideal para treinar rotas e lógica com datas em projetos Node.js!

---

## 🚀 Tecnologias

- Node.js
- Express.js

---

## 📁 Estrutura do Projeto

```
planta-virtual/
│
├── index.js         # Arquivo principal com a API
├── package.json     # Dependências
└── README.md        # Este arquivo
```

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/mariaegydio/floraApi.git
cd FloraApi
```

2. Instale as dependências:

```bash
npm install
```

3. Rode a API:

```bash
node app.js
```

---

## 🌱 Endpoints disponíveis

### ✅ Adotar uma nova planta

**POST** `/planta`  
Corpo JSON:
```json
{
  "nome": "Orquídea"
}
```

---

### 🔍 Ver planta atual

**GET** `/planta`  
Retorna o nome, status, datas de cuidados e histórico.

---

### 💧 Regar a planta

**POST** `/regar`  
Registra uma rega e atualiza o status da planta.

---

### ☀️ Dar sol à planta

**POST** `/sol`  
Registra a exposição ao sol e atualiza o status da planta.

---

### 📜 Ver histórico

**GET** `/historico`  
Exibe todas as ações feitas com a planta (rega e sol), com data/hora.

---

### 🗑️ Deletar a planta

**DELETE** `/planta`  
Deleta a planta atual e reseta os dados.

---

## 🧠 Lógica da Planta

A planta muda de status conforme o tempo desde o último cuidado:

- 🌿 **Saudável** → cuidada nas últimas 48h  
- 🥀 **Murcha** → passou de 48h sem rega ou sol  
- 💀 **Morta** → passou de 72h sem cuidados

---

## 🛠️ Melhorias Futuras

- Suporte a múltiplas plantas
- Persistência com banco de dados
- Front-end visual com React
- Notificações ou gamificação

---

## 👩‍💻 Autor(a)

Desenvolvido com carinho por [Maria Egydio](https://github.com/mariaegydio) 💚

