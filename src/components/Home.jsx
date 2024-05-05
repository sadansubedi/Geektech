import React, { useState } from 'react';
import { Alldata } from './Alldata';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, calculateTotalPrice } from '../features/counter/counterSlice';

const ItemList = () => {
  const totalPrice = useSelector((state) => state.counter.totalPrice); //counter is define in app/store.js
  // console.log(totalPrice)
  const dispatch = useDispatch();

  const placeOrder = (item) => {
      if (totalPrice + item['Price($)'] > 250 ) {
      alert("The total cost of all products within a single package cannot exceed $250.");
      return;
    }

    dispatch(addItemToCart(item));
    dispatch(calculateTotalPrice());
  };

  // const canPlaceOrder = totalPrice < 250;

  return (
    <>
    {/* {totalPrice >= 250 && (
        <p className="text-center mt-8 text-xl font-semibold">
          Total Price: ${totalPrice}
        </p>
      )} */}

      {totalPrice >= 250 ? (
        // <p className="text-center mt-8 text-xl font-semibold">
        //   Total Price: ${totalPrice}
        // </p>
        ""
      ) : (
        <p className="text-center mt-4 text-red-500">
          Minimum order total should be $250 for checkout.
        </p>
      )}
      {
        totalPrice ? (
          <p className="text-center mt-4 text-xl font-semibold">
          Current Total: ${totalPrice}
        </p> 
        ):""
      }
       
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold m-4 text-center">Item List</h1>
      <div className="grid grid-cols-3 gap-4">
        {Alldata.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{item.Name}</h2>
            <p className="text-gray-600">Price($): {item['Price($)']}</p>
            <p className="text-gray-600">Weight(g): {item['Weight(g)']}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
              onClick={() => placeOrder(item)}
            >
            Place Order  
            </button>
          </div>
        ))}
      </div>
      
    </div>
    </>
  );
};

export default ItemList;










// import React, { useState } from 'react';
// import { Alldata } from './Alldata';
// import { useSelector, useDispatch } from 'react-redux';
// import { addItemToCart, calculateTotalPrice } from '../features/counter/counterSlice';

// const ItemList = () => {
//   const totalPrice = useSelector((state) => state.counter.totalPrice); //counter is define in app/store.js
//   // console.log(totalPrice)
//   const dispatch = useDispatch();
//   const [isOrderPlaced, setIsOrderPlaced] = useState(false);

//   const placeOrder = (item) => {
//     if (totalPrice + item['Price($)'] > 250 || isOrderPlaced) {
//       alert("The total cost of all products within a single package cannot exceed $250.");
//       return;
//     }

//     dispatch(addItemToCart(item));
//     dispatch(calculateTotalPrice());
//     setIsOrderPlaced(true);
//   };

//   const canPlaceOrder = totalPrice < 250;

//   return (
//     <>
//     {/* {totalPrice >= 250 && (
//         <p className="text-center mt-8 text-xl font-semibold">
//           Total Price: ${totalPrice}
//         </p>
//       )} */}

//       {totalPrice >= 250 ? (
//         <p className="text-center mt-8 text-xl font-semibold">
//           Total Price: ${totalPrice}
//         </p>
//       ) : (
//         <p className="text-center mt-4 text-red-500">
//           Minimum order total should be $250 for checkout.
//         </p>
//       )}
//       <p className="text-center mt-4 text-xl font-semibold">
//         Current Total: ${totalPrice}
//       </p>
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold m-4 text-center">Item List</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {Alldata.map((item, index) => (
//           <div key={index} className="bg-gray-100 rounded-lg p-4">
//             <h2 className="text-xl font-semibold mb-2">{item.Name}</h2>
//             <p className="text-gray-600">Price($): {item['Price($)']}</p>
//             <p className="text-gray-600">Weight(g): {item['Weight(g)']}</p>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
//               onClick={() => placeOrder(item)}
//               disabled={!canPlaceOrder}
//             >
//               {canPlaceOrder ? 'Place Order' : 'Maximum Reached'}
//             </button>
//           </div>
//         ))}
//       </div>
      
//     </div>
//     </>
//   );
// };

// export default ItemList;



