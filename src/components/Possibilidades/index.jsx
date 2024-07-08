import Seletor from '../Seletor';
import styles from './Possibilidades.module.css';


export default function Possibilidades({possibilidades, calcularOdds, copiarPossibiilidades, times, exibirFacilitadores , setExibirFacilitadores}){

  return(
    <>
       {
        possibilidades.length > 0 && (
          <div className={styles.possibilidades}>
            <p className={styles.quantidadePossibilidades}>{possibilidades.length}/{possibilidades.length}</p>

            <Seletor
              textoAuxiliar={"Exibir auxiliadores?"}
              variavel={exibirFacilitadores}
              setVariavel={setExibirFacilitadores}
            />

            {
              possibilidades.map((possibilidade, index) => (
                <div 
                  key={index}
                  className={styles.possibilidade}
                >
                  <div className={styles.resultados}>
                    <strong>{index+1}</strong>&nbsp;
                    {
                      possibilidade.resultado.split("/").map((jogo, index) => (
                        <p key={index}>
                          {(index !== 0) && "/"}
                          {jogo.split(".")[0]}
                        </p>
                      ))
                    }
                  </div>

                  { 
                    calcularOdds && (
                      <>
                        <strong>Odd: </strong>{possibilidade.odd.toFixed(2)}
                      </>
                    )
                  }
   
                  {
                    exibirFacilitadores && (
                      <>
                        {
                          possibilidade.resultado.split("/").map((jogo, index) => (
                            <div 
                              className={styles.opcoes}
                              key={index}  
                            >
                              <p>
                                {
                                  (index == 0) ? times.time1 +" X "+ times.time2 :
                                  (index == 1) ? times.time3 +" X "+ times.time4 :
                                  (index == 2) && times.time5 +" X "+ times.time6 
                                }
                              </p>

                              <div className={styles.opcao+" "+styles[(jogo.split(".")[1] == "casa") && "resultadoCorreto"]}></div>
                              <div className={styles.opcao+" "+styles[(jogo.split(".")[1] == "empate") && "resultadoCorreto"]}></div>
                              <div className={styles.opcao+" "+styles[(jogo.split(".")[1] == "fora") && "resultadoCorreto"]}></div>
                            </div>
                          ))
                        }
                      </>
                    )
                  }
                </div>
              ))
            }

            <button 
              onClick={copiarPossibiilidades}
              className={styles.btnCopiarTexto}
            >
              Copiar texto
            </button>
          </div>
        )
      }
    </>
  )
}