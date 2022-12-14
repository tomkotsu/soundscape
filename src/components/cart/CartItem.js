import React from "react";

const CartItem = (props) => {
  const [_, setCart] = props.cart;
  return (
    <div className="bg-zinc-800 rounded-xl flex flex-col-reverse lg:flex-row justify-between items-center gap-10 drop-shadow-xl max-w-4xl">
      <div className="flex flex-col justify-center items-center text-white gap-4 p-12 text-center">
        <h2 className="text-4xl">{props.name}</h2>
        <h3 className="text-3xl">£{props.price}</h3>
        <h3>
          Quantity:{" "}
          <input
            value={props.quantity}
            className="text-black w-8 h-8 text-center"
            type="number"
            min="1"
            max="99"
            onChange={(event) => {
              setCart((prevState) => [
                ...prevState.filter((item) => item.id !== props.id),
                {
                  name: props.name,
                  price: props.price,
                  id: props.id,
                  img: props.img,
                  quantity: event.target.value,
                },
              ].sort((a, b) => {
                return a.id - b.id;
              }));
            }}
          />
        </h3>
        <button
          className="bg-red-500 p-4 border-white border-2 text-white"
          onClick={() => {
            setCart((prevState) => [
              ...prevState.filter((item) => item.id !== props.id),
            ]);
          }}
        >
          Remove from Cart
        </button>
      </div>
      <img
        src={props.img}
        className="bg-white lg:h-auto lg:w-[50%] rounded-t-xl lg:rounded-tl-none lg:rounded-r-xl shadow-lg"
      />
    </div>
  );
};

export default CartItem;
