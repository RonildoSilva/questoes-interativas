import { useState, useEffect } from 'react';
import { questoes } from './data/questoes';
import { shuffleAlternativasContent, shuffleArray } from './utils/shuffleUtils';
import { theme } from './config/theme';
import { injectThemeStyles } from './config/themeStyles';
import { Header } from './components/Header';
import { Questao } from './components/Questao';
import { Alternativas } from './components/Alternativas';
import { Navegacao } from './components/Navegacao';
import './App.css';

function App() {
  // ====== CONFIGURAÇÃO DO APLICATIVO ======
  // Mude estes valores para customizar seu aplicativo
  const APP_TITULO = 'ENADE - Questões de Estudo';
  const APP_IMAGEM = '/logo.webp'; // Deixe vazio para mostrar placeholder, ou cole URL da imagem aqui
  // ========================================

  // Injetar as variáveis CSS do tema quando o componente montar
  useEffect(() => {
    injectThemeStyles();
  }, []);

  const [questoesEmbaralhadas, setQuestoesEmbaralhadas] = useState([]);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [alternativasEmbaralhadas, setAlternativasEmbaralhadas] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]);
  const [respondida, setRespondida] = useState(false);
  const [respostas, setRespostas] = useState({});

  // Embaralhar questões uma única vez quando o componente monta
  useEffect(() => {
    setQuestoesEmbaralhadas(shuffleArray(questoes));
  }, []);

  // Efeito para embaralhar alternativas quando mudar de questão
  useEffect(() => {
    if (questoesEmbaralhadas.length === 0) return;

    const questaoAtualObj = questoesEmbaralhadas[questaoAtual];
    const embaralhadas = shuffleAlternativasContent(questaoAtualObj.alternativas);
    setAlternativasEmbaralhadas(embaralhadas);
    
    // Restaurar resposta anterior se existir
    if (respostas[questaoAtualObj.id]) {
      setSelecionadas(respostas[questaoAtualObj.id]);
      setRespondida(true);
    } else {
      setSelecionadas([]);
      setRespondida(false);
    }
  }, [questaoAtual, questoesEmbaralhadas]);

  const handleSelecionar = (novasSelecionadas) => {
    const questaoAtualObj = questoesEmbaralhadas[questaoAtual];
    
    // Salvar resposta imediatamente
    setRespostas({
      ...respostas,
      [questaoAtualObj.id]: novasSelecionadas,
    });
    
    // Atualizar selecionadas e marcar como respondida
    setSelecionadas(novasSelecionadas);
    setRespondida(true);
  };

  const handleProxima = () => {
    if (respondida && questaoAtual < questoesEmbaralhadas.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
    }
  };

  const handleAnterior = () => {
    if (questaoAtual > 0) {
      setQuestaoAtual(questaoAtual - 1);
    }
  };

  const questaoAtualObj = questoesEmbaralhadas.length > 0 ? questoesEmbaralhadas[questaoAtual] : null;

  if (!questaoAtualObj) {
    return (
      <div className="app">
        <Header titulo={APP_TITULO} imagem={APP_IMAGEM} />
        <div className="app-container" style={{ textAlign: 'center', padding: '40px' }}>
          <p>Carregando questões...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header titulo={APP_TITULO} imagem={APP_IMAGEM} />

      <div className="app-container">
        <Questao questao={questaoAtualObj} numeroQuestao={questaoAtual + 1} />

        <Alternativas
          alternativas={alternativasEmbaralhadas}
          tipo={questaoAtualObj.tipo}
          selecionadas={selecionadas}
          onSelecionar={handleSelecionar}
          desabilitado={respondida}
          mostrarRespasta={respondida}
          respondida={respondida}
        />

        <Navegacao
          questaoAtual={questaoAtual}
          totalQuestoes={questoesEmbaralhadas.length}
          onAnterior={handleAnterior}
          onProxima={handleProxima}
          temResposta={respondida}
          respostasFeitas={respostas}
        />
      </div>
    </div>
  );
}

export default App;
