import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({handleMoney, sushiList, moneyLeft, four, handleMoreClick, handleSushiPlate}) {

  
  const renderSushi = sushiList.map(sushi =>{
    if(sushi.id > four && sushi.id <= four + 4){
      return  <Sushi key={sushi.id} handleMoney={handleMoney} moneyLeft={moneyLeft} handleSushiPlate={handleSushiPlate} image={sushi.img_url} name={sushi.name} price={sushi.price} created={sushi.created_at}/>
    }
  })
  
  return (
    <div className="belt">
      {renderSushi}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
