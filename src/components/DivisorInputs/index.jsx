import styles from './DivisorInputs.module.css';


export default function DivisorInputs({tituloDivisor, children}){

  return(
    <div className={styles.divisor}>
      <p>{tituloDivisor}</p>
      {children}
    </div>
  )
}