import {useState} from "react";

function Cart(){

    const initial = [
        {id: 1, name:'Item A', price: 100, qty:1},
        {id: 2, name:'Item B', price:200, qty: 3},
    ];

    const [ items, setItems ] = useState(initial);

    const updateQty = (id,delta) =>{
        setItems(items.map(i=>
            i.id===id ? {...i, qty: i.qty+delta} : i
        ));
    };

    const remove = (id) =>{
        setItems(items.filter(i=> i.id!==id));
    };

    const taxRate = 0.18;
    const total = items.reduce((sum,i)=>sum+i.price*i.qty,0);
    const tax = total*taxRate;
    const final = total+tax;

    return (
        <div>
            <h1>Shopping Cart</h1>
            {items.map(i=>
                <div key={i.id}>
                    {i.name} - {i.price} * {i.qty}
                    <button onClick={()=>updateQty(i.id,1)}>+</button>
                    <button onClick={()=> i.qty>1 && updateQty(i.id,-1)}>-</button>
                    <button onClick={()=>remove(i.id)}>Remove</button>
                </div>
            )}
            <hr />
            <p>Total: {total}</p>
            <p>Tax (18%): ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${final.toFixed(2)}</h4>
        </div>
    );
}   

export default Cart;