export default function Input({tipo, dica, nome, preencherEntidade, valor, condicaoParaApenasLer}){

  return(
    <input 
      type={tipo}
      placeholder={dica}
      name={nome} 
      onChange={((e) => preencherEntidade(e))}
      value={valor || ""}
      readOnly={condicaoParaApenasLer}
    />
  )
}