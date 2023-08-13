import { createContext, useContext, useState, useEffect } from "react";
import ShopingCard from "./ShopingCard";

const shopingCardContext = createContext({});
const initialstate = localStorage.getItem("card-store")
  ? JSON.parse(localStorage.getItem("card-store"))
  : [];

const ShopingCardProvider = ({ children }) => {
  const [CartItems, setCartItems] = useState(initialstate);
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("card-store", JSON.stringify(CartItems));
  }, [CartItems]);

  const openCard = () => {
    return setisOpen(true);
  };
  const closeCard = () => {
    return setisOpen(false);
  };
  const GetCardQuantity = (id) => {
    return CartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const IncreaceItmeQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaceItmeQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id).quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const RemoveAll = (id) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  const ItmesQuantinty = CartItems.reduce(
    (total, item) => item.quantity + total,
    0
  );
  return (
    <shopingCardContext.Provider
      value={{
        CartItems,
        GetCardQuantity,
        IncreaceItmeQuantity,
        decreaceItmeQuantity,
        RemoveAll,
        openCard,
        closeCard,
        ItmesQuantinty,
      }}
    >
      {children}
      <ShopingCard isOpen={isOpen} />
    </shopingCardContext.Provider>
  );
};

export default ShopingCardProvider;

export const useShopingCard = () => {
  return useContext(shopingCardContext);
};
