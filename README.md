# Conscientiza Saúde — Outubro Rosa e Novembro Azul

Projeto acadêmico desenvolvido para o Trabalho Final de Curso do Técnico em Desenvolvimento de Sistemas.

## Objetivo
Oferecer um portal responsivo com conteúdo educativo sobre câncer de mama e câncer de próstata, além de um quiz interativo com feedback e armazenamento local do resultado.

## Tecnologias
- HTML5: estrutura semântica das páginas.
- CSS3: identidade visual, layout responsivo e acessibilidade básica.
- JavaScript: navegação mobile, lógica do quiz, pontuação e LocalStorage.
- Google Fonts: tipografia DM Sans e Manrope.

## Como executar
1. Baixe ou clone este repositório.
2. Abra a pasta do projeto.
3. Abra `index.html` em um navegador atualizado.

Não é necessário instalar dependências nem configurar servidor. Para desenvolvimento, recomenda-se usar a extensão Live Server do Visual Studio Code ou um servidor HTTP local.

## Funcionalidades
- Página inicial com apresentação das duas campanhas.
- Seções educativas Outubro Rosa e Novembro Azul.
- Conteúdo sobre fatores de risco, sinais de atenção, prevenção/diagnóstico e mitos e verdades.
- Quiz com seis questões, seleção de respostas, pontuação e gabarito comentado.
- Salvamento do último resultado no LocalStorage (`conscientizaSaudeQuiz`).
- Menu adaptado a telas menores.
- Links para fontes oficiais.

## Estrutura
```text
conscientizacao-saude-tfc/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── docs/
    ├── requisitos.md
    ├── modelagem.md
    ├── prototipo.md
    ├── testes.md
    └── evidencias-opencode.md
```

## Persistência
O sistema utiliza `localStorage` do navegador para guardar o último resultado do quiz. Os dados permanecem no dispositivo e navegador utilizados. Não há cadastro de usuários nem envio de dados para servidor.

## Limitações e responsabilidade
Este é um projeto educativo, não clínico. Não realiza diagnóstico, não prescreve tratamento e não substitui atendimento profissional. O conteúdo deve ser revisado periodicamente à luz das orientações oficiais mais recentes.

## Fontes de conteúdo
- [INCA — Câncer de mama](https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/mama)
- [INCA — Câncer de próstata](https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/prostata)
- [Ministério da Saúde — Câncer de mama](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/cancer-de-mama)
- [Ministério da Saúde — Saúde do homem](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-do-homem)
