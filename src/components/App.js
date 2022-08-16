import React, { useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  useEffect(()=>{
    fetch(API)
    .then(res => res.json())
    .then( data => setSushiList(data))
  },[])

  const [four, setFour] = useState(0)
  const [sushiList, setSushiList] = useState([])
  const [plates, setPlates] = useState([])
  const [moneyLeft, setMoneyLeft] = useState(50)

  function handleMoreClick(){
    setFour(four + 4)
  }
  
  function handleSushiPlate(obj){
    setPlates([...plates, obj])
  }
  function handleMoney(price){
    setMoneyLeft(moneyLeft - price)
  }
  console.log(sushiList)
  return (
    <div className="app">
      <SushiContainer handleMoney={handleMoney} moneyLeft={moneyLeft} sushiList={sushiList} handleSushiPlate={handleSushiPlate} four={four} handleMoreClick={handleMoreClick}/>
      <Table moneyLeft={moneyLeft} plates={plates} />
    </div>
  );
}

export default App;
