const questions = [
 {category:"OUTUBRO ROSA",question:"Qual é uma atitude importante diante de um nódulo novo na mama?",answers:["Ignorar se não houver dor","Procurar avaliação em um serviço de saúde","Esperar obrigatoriamente até a próxima mamografia"],correct:1,feedback:"Um nódulo novo ou persistente deve ser avaliado. Nem todo nódulo é câncer, mas é importante investigar."},
 {category:"OUTUBRO ROSA",question:"A mamografia de rastreamento é destinada a:",answers:["Pessoas sem sintomas, conforme recomendações de idade e periodicidade","Confirmar sozinha qualquer diagnóstico","Substituir a avaliação de sintomas"],correct:0,feedback:"A mamografia pode ser usada no rastreamento de pessoas sem sintomas, conforme recomendações oficiais. Sintomas precisam de avaliação."},
 {category:"OUTUBRO ROSA",question:"Qual afirmação sobre câncer de mama é verdadeira?",answers:["Somente mulheres podem ter","Todo nódulo é maligno","Homens também podem desenvolver, embora seja raro"],correct:2,feedback:"O câncer de mama também pode ocorrer em homens, apesar de ser muito menos frequente."},
 {category:"NOVEMBRO AZUL",question:"O câncer de próstata pode apresentar sintomas no início?",answers:["Sempre apresenta sintomas fortes","Pode não apresentar sintomas","Só causa sintomas na pele"],correct:1,feedback:"Muitos casos iniciais não apresentam sintomas. Por isso, decisões sobre avaliação devem considerar orientação profissional."},
 {category:"NOVEMBRO AZUL",question:"O exame PSA, isoladamente:",answers:["Confirma o câncer","Não confirma sozinho o diagnóstico","É indicado obrigatoriamente para todas as pessoas"],correct:1,feedback:"O PSA pode se alterar por diferentes motivos. O resultado precisa ser interpretado no contexto clínico."},
 {category:"NOVEMBRO AZUL",question:"Qual é a melhor atitude para decidir sobre exames de rastreamento da próstata?",answers:["Conversar com profissional de saúde sobre benefícios e possíveis riscos","Fazer qualquer exame sem orientação","Evitar conversar sobre o assunto"],correct:0,feedback:"A decisão deve ser individualizada, considerando idade, histórico, preferências, benefícios e possíveis danos."}
];
const $ = (selector) => document.querySelector(selector);
let current = 0, score = 0, selected = null, answers = [];
const questionArea = $("#questionArea"), nextBtn = $("#nextBtn"), restartBtn = $("#restartBtn");
function renderQuestion(){
 const q=questions[current]; selected=null;
 $("#progressText").textContent=`PERGUNTA ${current+1} DE ${questions.length}`;
 $("#progressBar").style.width=`${((current+1)/questions.length)*100}%`;
 questionArea.innerHTML=`<div class="question-category">${q.category}</div><h3 class="question-title">${q.question}</h3><div class="answers">${q.answers.map((a,i)=>`<button class="answer-option" type="button" data-index="${i}"><span class="answer-letter">${String.fromCharCode(65+i)}</span><span>${a}</span></button>`).join("")}</div>`;
 questionArea.querySelectorAll(".answer-option").forEach(button=>button.addEventListener("click",()=>selectAnswer(Number(button.dataset.index))));
 nextBtn.disabled=true; nextBtn.textContent=current===questions.length-1?"Ver resultado →":"Próxima pergunta →";
}
function selectAnswer(index){
 selected=index;
 questionArea.querySelectorAll(".answer-option").forEach((button,i)=>button.classList.toggle("selected",i===index));
 nextBtn.disabled=false;
}
function finishQuiz(){
 questionArea.hidden=true; $(".quiz-progress").hidden=true; nextBtn.hidden=true; restartBtn.hidden=false;
 const percentage=Math.round((score/questions.length)*100);
 const message=percentage===100?"Excelente! Você acertou todas as perguntas.":percentage>=67?"Muito bem! Você demonstrou um bom conhecimento.":"Continue aprendendo! Rever os conteúdos é uma ótima forma de ampliar seu conhecimento.";
 const result=$("#quizResult"); result.hidden=false;
 result.innerHTML=`<div class="result-score">${score}/${questions.length}</div><h3>Você concluiu o quiz!</h3><p><strong>${percentage}% de acertos.</strong> ${message}</p><p>Este resultado mede apenas suas respostas neste quiz. Não representa avaliação ou diagnóstico de saúde.</p><h3>Gabarito comentado</h3>${questions.map((q,i)=>`<p><strong>${i+1}. ${answers[i]===q.correct?"Acertou":"Não acertou"}.</strong> ${q.feedback}</p>`).join("")}`;
 try{localStorage.setItem("conscientizaSaudeQuiz",JSON.stringify({score,total:questions.length,percentage,date:new Date().toISOString()}));}catch(error){console.warn("Não foi possível salvar o resultado:",error);}
}
nextBtn.addEventListener("click",()=>{if(selected===null)return; answers[current]=selected;if(selected===questions[current].correct)score++;if(current<questions.length-1){current++;renderQuestion();}else finishQuiz();});
restartBtn.addEventListener("click",()=>{current=0;score=0;selected=null;answers=[];questionArea.hidden=false;$(".quiz-progress").hidden=false;nextBtn.hidden=false;$("#quizResult").hidden=true;restartBtn.hidden=true;renderQuestion();});
$("#menuToggle").addEventListener("click",()=>{const open=$("#mainNav").classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));});
$("#mainNav").querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{$("#mainNav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false");}));
$("#year").textContent=new Date().getFullYear();
renderQuestion();
