# Documento de Requisitos

## 1. Identificação
**Sistema:** Conscientiza Saúde — Outubro Rosa e Novembro Azul  
**Tipo:** Sistema web educativo  
**Público-alvo:** Pessoas que buscam informações introdutórias sobre as campanhas.

## 2. Problema
Informações de saúde podem estar dispersas ou ser difíceis de compreender. O sistema organiza conteúdos introdutórios e oferece uma atividade interativa para reforçar o aprendizado.

## 3. Objetivo
Disponibilizar informações educativas, acessíveis e organizadas sobre câncer de mama e câncer de próstata, com navegação simples e quiz.

## 4. Requisitos funcionais
| ID | Requisito | Critério de aceite |
|---|---|---|
| RF01 | Página inicial | Apresenta o propósito e links para as campanhas. |
| RF02 | Área Outubro Rosa | Exibe conteúdo sobre câncer de mama. |
| RF03 | Área Novembro Azul | Exibe conteúdo sobre câncer de próstata. |
| RF04 | Quiz interativo | Permite selecionar respostas para seis perguntas. |
| RF05 | Resultado | Exibe pontuação, percentual e feedback. |
| RF06 | Navegação | Menu permite acessar as seções do sistema. |
| RF07 | Responsividade | Layout se adapta a desktop e dispositivos móveis. |
| RF08 | Persistência | Último resultado é armazenado no LocalStorage. |

## 5. Requisitos não funcionais
- RNF01 — Usabilidade: textos e controles devem ser compreensíveis.
- RNF02 — Responsividade: conteúdo deve permanecer utilizável em telas estreitas.
- RNF03 — Compatibilidade: utilizar recursos suportados por navegadores modernos.
- RNF04 — Privacidade: não solicitar dados pessoais nem transmitir respostas.
- RNF05 — Acessibilidade: estrutura semântica, navegação por teclado e foco visível.
- RNF06 — Confiabilidade: quiz deve calcular pontuação conforme gabarito definido.
- RNF07 — Saúde responsável: conteúdo educativo, sem diagnóstico ou prescrição.

## 6. Regras de negócio
- RN01: cada questão possui uma única resposta correta.
- RN02: cada resposta correta soma um ponto.
- RN03: resultado final é calculado pela quantidade de acertos sobre seis questões.
- RN04: o último resultado é salvo localmente no navegador.
- RN05: reiniciar o quiz zera a pontuação e as respostas da tentativa anterior.

## 7. Restrições e premissas
- Aplicação front-end sem backend.
- LocalStorage depende do navegador e dispositivo; limpar os dados do navegador remove o resultado.
- As informações de saúde devem ser conferidas nas fontes oficiais.
- O sistema não substitui consulta ou orientação profissional.
