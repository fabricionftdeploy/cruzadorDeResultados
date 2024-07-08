import styles from './Seletor.module.css';

export default function Seletor({textoAuxiliar, variavel, setVariavel}){

  return(
    <>
      <p className={styles.textoSeletor}>{textoAuxiliar}</p>
      <div className={styles.seletor}>
        <div 
          className={styles.circulo+" "+styles[(variavel) && "ativo"]}
          onClick={() => setVariavel((variavel) ? false : true)}  
        >
          {(variavel) ? "SIM" : "NÃO"}
        </div>
      </div>
    </>
  )
}