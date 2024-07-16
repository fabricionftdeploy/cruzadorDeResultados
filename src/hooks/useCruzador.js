import { useState } from "react"
import soundButton from '../assets/sounds/button.mp3';


const useCruzador = () => {

  //times
  const [times, setTimes] = useState({
    time1: "", time2: "", time3: "", time4: "", time5: "", time6: ""
  });

  const preencherTime = (e) => {
    setTimes({...times, [e.target.name] : e.target.value});
  }

  const [odds, setOdds] = useState({
    odd1: 0, odd2: 0, odd3: 0, odd4: 0, odd5: 0, odd6: 0, odd7: 0, odd8: 0, odd9: 0, 
  });

  const preencherOdd = (e) => {
    setOdds({...odds, [e.target.name] : e.target.value});
  }

  //Possibilidades
  const [possibilidades, setPossibilidades] = useState([]);
  const [estaoPreenchidos, setEstaoPreenchidos] = useState(false);

  //Escolher
  const [quantidadeDeJogos, setQuantidadeDeJogos] = useState(3);
  const [considerarEmpates, setConsiderarEmpates] = useState(true);
  const [calcularOdds, setCalcularOdds] = useState(false);
  const [exibirFacilitadores, setExibirFacilitadores] = useState(false);

  const gerarPossibilidades = () => {
    new Audio(soundButton).play();
    setEstaoPreenchidos(true);
    setPossibilidades([]);

    let timesA = [
      [times.time1.concat(".casa"), odds.odd1],
      [times.time2.concat(".fora"), odds.odd3],
      ["Empate-".concat(times.time1).concat(".empate"), odds.odd2]
    ];
    let timesB = [
      [times.time3.concat(".casa"), odds.odd4], 
      [times.time4.concat(".fora"), odds.odd6], 
      ["Empate-".concat(times.time3).concat(".empate"), odds.odd5]
    ];
    let timesC = [
      [times.time5.concat(".casa"), odds.odd7], 
      [times.time6.concat(".fora"), odds.odd9], 
      ["Empate-".concat(times.time5).concat(".empate"), odds.odd8]
    ];
    
    if(!considerarEmpates){
      timesA.pop();
      timesB.pop();
      timesC.pop();
    }

    timesA.map((timeA) => {
      timesB.map((timeB) => {
        if(quantidadeDeJogos == 3){
          timesC.map((timeC) => {
            setPossibilidades(anterior => [...anterior, {
                resultado: timeA[0]+"/"+timeB[0]+"/"+timeC[0],
                odd: (timeA[1]*timeB[1]*timeC[1])
              }
            ]);
          });
        }else if(quantidadeDeJogos == 2){
          setPossibilidades(anterior => [...anterior, {
              resultado:  timeA[0]+"/"+timeB[0],
              odd: (timeA[1]*timeB[1])
            }
          ]);
        }
      });
    });
  }

  const limparTimes = () => {
    new Audio(soundButton).play();
    setTimes({time1: "", time2: "", time3: "", time4: "", time5: "", time6: ""});
    setOdds({odd1: 0, odd2: 0, odd3: 0, odd4: 0, odd5: 0, odd6: 0, odd7: 0, odd8: 0, odd9: 0});
    setEstaoPreenchidos(false);
    setPossibilidades([]);
  }

  //Aviso
  const [visbilidadeNotificacao, setVisbilidadeNotificacao] = useState(false);

  const copiarPossibiilidades = () => {
    new Audio(soundButton).play();
    let possibilidadesPorExtenso = "";
    
    possibilidades.map((posibilidade, index) => {
      possibilidadesPorExtenso += (index+1)+" - ";

      let timesDaPossibilidade = posibilidade.resultado.split("/");
      timesDaPossibilidade.map((time, indexTime) => {
        possibilidadesPorExtenso += time.split(".")[0];
        if(timesDaPossibilidade.length !== (indexTime+1))possibilidadesPorExtenso += "/";
      })
      possibilidadesPorExtenso +="\n";
    })

    navigator.clipboard.writeText(possibilidadesPorExtenso)
    .then(() => {
      setVisbilidadeNotificacao(true);
      setTimeout(() => {
        setVisbilidadeNotificacao(false);
      }, 4000);
    })
    .catch(() => {
      console.log("Erro ao copiar");
    });
  }

  return{
    calcularOdds, setCalcularOdds, preencherOdd, odds,
    exibirFacilitadores, setExibirFacilitadores,
    quantidadeDeJogos, setQuantidadeDeJogos,
    considerarEmpates, setConsiderarEmpates,
    times, estaoPreenchidos, preencherTime, limparTimes,
    gerarPossibilidades, possibilidades, copiarPossibiilidades,
    visbilidadeNotificacao
  };
}

export default useCruzador;