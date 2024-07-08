import styles from './Notificacao.module.css';


export default function Notificacao({visbilidadeNotificacao}){

  return(
    <>
      {
        visbilidadeNotificacao && (
          <p className={styles.notificacao}>
            Texto copiado com sucesso
          </p>
        )
      }
    </>
  );
}