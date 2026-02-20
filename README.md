# 🧠 Projeto de Nivelamento — Saúde e Bem-Estar

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Tecnologias](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20Bootstrap-blue)
![Licença](https://img.shields.io/badge/license-Uso%20Acadêmico-lightgrey)

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como atividade individual de nivelamento com foco em desenvolvimento front-end.

A aplicação tem como propósito oferecer apoio informativo a pessoas que estejam enfrentando:

- Ansiedade  
- Excesso de preocupações  
- Sobrecarga emocional  

Além disso, o sistema permite:

- Espaço para desabafo  
- Conteúdo de apoio emocional  
- Área para doação a instituições de combate à depressão  

---

## 🎯 Objetivo

Desenvolver uma aplicação web utilizando tecnologias front-end que simule:

- Sistema de autenticação  
- Navegação entre páginas  
- Interações com modais  
- Manipulação de DOM  
- Uso de `localStorage`  

---

## 🛠 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Bootstrap 5  

---

## 🔐 Acesso ao Sistema

A aplicação inicia na tela de login.

### Credenciais de teste:
Usuário: Guilherme
Senha: 1234


Após validação:

- O usuário é redirecionado para `home.html`
- O status de login é armazenado no `localStorage`

> ⚠️ Observação: Sistema de autenticação apenas simulado (não possui backend).

---

## 🏠 Funcionalidades da Home

Após o login, o usuário encontra três cards principais:

### 🟣 Ansiedade
Modal com:
- Texto explicativo  
- Vídeo com orientações práticas  

### 🔵 Preocupações
Modal com:
- Texto orientativo  
- Vídeo relacionado  

### 🟢 Saúde e Bem-Estar
Modal com:
- Texto informativo  
- Link externo com dicas para manter o bem-estar  

---

## 📌 Menu Superior

No canto superior direito estão disponíveis:

- **Desabafe** → Página com modal para envio de título e conteúdo  
- **Doação** → Página com QR Code e chave PIX  
- **Sobre** → Informações sobre o projeto  
- **Sair** → Remove o login e retorna para tela inicial  

---

## ⚙️ Funcionalidades Implementadas

✔ Validação de login com JavaScript  
✔ Redirecionamento entre páginas  
✔ Uso de `localStorage`  
✔ Modais com Bootstrap  
✔ Estrutura organizada em múltiplas páginas  

---

## 📂 Estrutura do Projeto

nivelamento-main/
│
├── tela-login.html
├── home.html
├── sobre.html
├── desabafo.html
├── doacao.html
├── script.js
│
└── imgs/


---

## ▶️ Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nivelamento.git

1 - Acesse a pasta do projeto

2 - Abra o arquivo tela-login.html no navegador
