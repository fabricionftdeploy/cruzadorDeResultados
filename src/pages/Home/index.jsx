import styles from './Home.module.css';

//Components
import Container from '../../components/Container';

//Hooks
import useCruzador from '../../hooks/useCruzador';
import Seletor from '../../components/Seletor';
import DivisorInputs from '../../components/DivisorInputs';
import Input from '../../components/Input';
import InputsCalcularOdds from '../../components/InputsCalcularOdds';
import Notificacao from '../../components/Notificacao';
import Possibilidades from '../../components/Possibilidades';


export default function Home(){

  const {
    calcularOdds, setCalcularOdds, preencherOdd, odds,
    exibirFacilitadores, setExibirFacilitadores,
    quantidadeDeJogos, setQuantidadeDeJogos,
    considerarEmpates, setConsiderarEmpates,
    times, estaoPreenchidos, preencherTime, limparTimes,
    gerarPossibilidades, possibilidades, copiarPossibiilidades,
    visbilidadeNotificacao
  } = useCruzador();

  return(
    <Container>
      <Notificacao
        visbilidadeNotificacao={visbilidadeNotificacao}
      />

      <p className={styles.textoSeletor}>Quantidade de jogos</p>
      <select 
        className={styles.seletorQuantidadeDeJogos}
        onChange={(e) => setQuantidadeDeJogos(e.target.value)}
        value={quantidadeDeJogos}
      >
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <Seletor
        textoAuxiliar={"Considerar empates?"}
        variavel={considerarEmpates}
        setVariavel={setConsiderarEmpates}
      />

      <Seletor
        textoAuxiliar={"Calcular odds?"}
        variavel={calcularOdds}
        setVariavel={setCalcularOdds}
      />

      <DivisorInputs
        tituloDivisor={"jogo 1"}
      >
        <Input
          tipo={"text"}
          dica={"Time casa"}
          nome={"time1"}
          preencherEntidade={preencherTime}
          valor={times.time1}
          condicaoParaApenasLer={estaoPreenchidos}
        />

        <Input
          tipo={"text"}
          dica={"Time fora"}
          nome={"time2"}
          preencherEntidade={preencherTime}
          valor={times.time2}
          condicaoParaApenasLer={estaoPreenchidos}
        />

        <InputsCalcularOdds
          calcularOdds={calcularOdds}
          considerarEmpates={considerarEmpates}
          preencherEntidade={preencherOdd}
          condicaoParaApenasLer={estaoPreenchidos}
          nomePrimeiraVariavel={"odd1"}
          valorPrimeiraVariavel={odds.odd1}
          nomeSegundaVariavel={"odd2"}
          valorSegundaVariavel={odds.odd2}
          nomeTerceiraVariavel={"odd3"}
          valorTerceiraVariavel={odds.odd3}
        />
      </DivisorInputs>

      <DivisorInputs
        tituloDivisor={"jogo 2"}
      >
        <Input
          tipo={"text"}
          dica={"Time casa"}
          nome={"time3"}
          preencherEntidade={preencherTime}
          valor={times.time3}
          condicaoParaApenasLer={estaoPreenchidos}
        />

        <Input
          tipo={"text"}
          dica={"Time fora"}
          nome={"time4"}
          preencherEntidade={preencherTime}
          valor={times.time4}
          condicaoParaApenasLer={estaoPreenchidos}
        />

        <InputsCalcularOdds
          calcularOdds={calcularOdds}
          considerarEmpates={considerarEmpates}
          preencherEntidade={preencherOdd}
          condicaoParaApenasLer={estaoPreenchidos}
          nomePrimeiraVariavel={"odd4"}
          valorPrimeiraVariavel={odds.odd4}
          nomeSegundaVariavel={"odd5"}
          valorSegundaVariavel={odds.odd5}
          nomeTerceiraVariavel={"odd6"}
          valorTerceiraVariavel={odds.odd6}
        />
        </DivisorInputs>

      {
        quantidadeDeJogos == 3 && (
          <DivisorInputs
            tituloDivisor={"Jogo 3"}
          >
            <Input
              tipo={"text"}
              dica={"Time fora"}
              nome={"time5"}
              preencherEntidade={preencherTime}
              valor={times.time5}
              condicaoParaApenasLer={estaoPreenchidos}
            />

            <Input
              tipo={"text"}
              dica={"Time fora"}
              nome={"time6"}
              preencherEntidade={preencherTime}
              valor={times.time6}
              condicaoParaApenasLer={estaoPreenchidos}
            />

            <InputsCalcularOdds
              calcularOdds={calcularOdds}
              considerarEmpates={considerarEmpates}
              preencherEntidade={preencherOdd}
              condicaoParaApenasLer={estaoPreenchidos}
              nomePrimeiraVariavel={"odd7"}
              valorPrimeiraVariavel={odds.odd7}
              nomeSegundaVariavel={"odd8"}
              valorSegundaVariavel={odds.odd8}
              nomeTerceiraVariavel={"odd9"}
              valorTerceiraVariavel={odds.odd9}
            />
          </DivisorInputs>
        )
      }

      <button 
        className={styles.btnPossibilidades+" "+styles[(
          (times.time1 && times.time2 && times.time3 &&
           times.time4 && quantidadeDeJogos == 2) ||
          (times.time1 && times.time2 && times.time3 &&
           times.time4 && times.time5 && times.time6 && quantidadeDeJogos == 3) ? "": "desativado"
        )]+" "+styles[(estaoPreenchidos) && "habilitado"]}
        disabled={
          (times.time1 && times.time2 && times.time3 &&
           times.time4 && quantidadeDeJogos == 2) ||
          (times.time1 && times.time2 && times.time3 &&
           times.time4 && times.time5 && times.time6 && quantidadeDeJogos == 3) ? false : true
        }
        onClick={(estaoPreenchidos) ? limparTimes : gerarPossibilidades}
      >
        {estaoPreenchidos ? "Limpar" : "Gerar possibilidades"}
      </button>

      <Possibilidades
        possibilidades={possibilidades}
        calcularOdds={calcularOdds}
        copiarPossibiilidades={copiarPossibiilidades}
        times={times}
        exibirFacilitadores={exibirFacilitadores}
        setExibirFacilitadores={setExibirFacilitadores}
      />
    </Container>
  )
}