import React, {useState} from "react";

function Sushi({image, name, price, handleSushiPlate, handleMoney, moneyLeft}) {

  const [ eaten, setEaten] = useState(false)
   
  function handleClick(){
    if(moneyLeft - price > 0){
        setEaten(!eaten)
        handleSushiPlate({image: image, name: name, price: price})
        handleMoney(price)
    }
  
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={()=> handleClick()}>
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
