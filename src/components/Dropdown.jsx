import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { calculateTotalPrice } from '../features/counter/counterSlice';

const Dropdown = () => {
  const getdata = useSelector((state) => state.counter.carts);
  console.log(getdata)

  const dispatch = useDispatch()

  const [price,Setprice] = useState(0);
  const [weight,Setweight] = useState(0);
  const [charges, setCourierCharge] = useState(0);

  // console.log(price);
  // console.log(charges);


  const total =()=>{

    let price = 0;
    let weight = 0;
    getdata.map((ele,k)=>{
      price = ele['Price($)']*ele.qnty  + price
      weight = ele['Weight(g)']*ele.qnty  + weight
    });
    Setprice(price);
    Setweight(weight);
    calculateCourierCharge()// Recalculate courier charge after updating weight
    
  };
  const calculateCourierCharge = () => {
    if (weight > 0) {
      if (weight <= 200) {
        setCourierCharge(5);
      } else if (weight <= 500) {
        setCourierCharge(10);
      } else if (weight <= 1000) {
        setCourierCharge(15);
      } else if (weight <= 5000) {
        setCourierCharge(20);
      } else {
        // Handle weight exceeding 5000g
        setCourierCharge(0);
      }
    } else {
      setCourierCharge(0);
    }
  }
  useEffect(()=>{
    total()
    // calculateCourierCharge()
  },[total]); 
  return (
    <>
      {getdata.length > 0 ? (
        <div className='text-black'>
          <ul className='bg-gray-50 shadow-lg rounded-2xl right-8 m-3 p-4 absolute'>
            {getdata.map((item, id) => (
              <li key={id}>
                <p>Name :{item.Name}</p>
                <p>Price: Rs {item['Price($)']}</p>
                <p>Quantity: {item['Weight(g)']}</p>
                <p>total quantity: {item.qnty}</p>
                <hr className='py-2'/>
              </li> 
            ))}
             <p className='text-center'>Total price:$ {price}</p>
             <p className='text-center'>Total weight:{weight}(g)</p>
             <p className='text-center'>Courier price:${charges}</p>
          </ul>
        </div>
      ) :
      "" //  no need to do anything
      }
    </>
  );
};

export default Dropdown;


