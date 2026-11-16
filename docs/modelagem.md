# Modelagem do Sistema

## 1. Arquitetura
Aplicação front-end estática, executada no navegador.

```mermaid
flowchart TD
    U[Usuário] --> H[index.html]
    H --> C[css/style.css]
    H --> J[js/script.js]
    J --> Q[Banco de questões em memória]
    J --> L[(LocalStorage)]
    Q --> R[Resultado do quiz]
    R --> L
```

## 2. Fluxo do quiz
```mermaid
flowchart TD
    A[Iniciar quiz] --> B[Exibir pergunta]
    B --> C[Selecionar alternativa]
    C --> D{Resposta selecionada?}
    D -- Não --> C
    D -- Sim --> E[Habilitar próxima]
    E --> F{Última pergunta?}
    F -- Não --> B
    F -- Sim --> G[Calcular pontuação]
    G --> H[Exibir resultado e feedback]
    H --> I[Salvar no LocalStorage]
    I --> J{Recomeçar?}
    J -- Sim --> A
    J -- Não --> K[Fim]
```

## 3. Modelo de dados
Não existe banco de dados relacional. O objeto salvo no LocalStorage segue esta estrutura:

```json
{
  "score": 5,
  "total": 6,
  "percentage": 83,
  "date": "2026-11-16T17:00:00.000Z"
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| score | number | Quantidade de respostas corretas |
| total | number | Total de perguntas |
| percentage | number | Percentual de acertos |
| date | string | Data/hora ISO da conclusão |

## 4. Componentes principais
- `index.html`: conteúdo, seções e estrutura da interface.
- `css/style.css`: cores, tipografia, componentes e breakpoints.
- `js/script.js`: perguntas, navegação, validação, pontuação e persistência.
