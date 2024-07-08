import styles from './Possibilidades.module.css';


export default function Possibilidades({possibilidades, calcularOdds, copiarPossibiilidades}){

  return(
    <>
       {
        possibilidades.length > 0 && (
          <div className={styles.possibilidades}>
            <h1>{possibilidades.length} Possibilidades</h1>
            {
              possibilidades.map((possibilidade, index) => (
                <p 
                  key={index}
                  className={styles[(index % 2 == 0) && "par"]}
                >
                  <strong>{index+1}</strong> - {possibilidade.resultado}
                  <br />
                  { 
                    calcularOdds && (
                      <>
                        <strong>Odd: </strong>{possibilidade.odd.toFixed(2)}
                      </>
                    )
                  }
                </p>
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