import styles from './InputsCalcularOdds.module.css';
import Input from "../Input";


export default function InputsCalcularOdds({calcularOdds, considerarEmpates, preencherEntidade, condicaoParaApenasLer,
                                            nomePrimeiraVariavel, nomeSegundaVariavel, nomeTerceiraVariavel,
                                            valorPrimeiraVariavel, valorSegundaVariavel, valorTerceiraVariavel}){

  return(
    <>
      {
        calcularOdds && (
          <div className={styles.linha+" "+styles[(!considerarEmpates) && "semEmpate"]}>
            <Input
              tipo={"number"}
              dica={"1"}
              nome={nomePrimeiraVariavel}
              preencherEntidade={preencherEntidade}
              valor={valorPrimeiraVariavel}
              condicaoParaApenasLer={condicaoParaApenasLer}
            />

            {
              considerarEmpates && (
                <Input
                  tipo={"number"}
                  dica={"X"}
                  nome={nomeSegundaVariavel}
                  preencherEntidade={preencherEntidade}
                  valor={valorSegundaVariavel}
                  condicaoParaApenasLer={condicaoParaApenasLer}
                />
              )
            }

            <Input
              tipo={"number"}
              dica={"2"}
              nome={nomeTerceiraVariavel}
              preencherEntidade={preencherEntidade}
              valor={valorTerceiraVariavel}
              condicaoParaApenasLer={condicaoParaApenasLer}
            />
          </div>
        )
      }
    </>
  )
}