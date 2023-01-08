import { createContext, ReactNode, useState } from 'react'

interface ItemProps {
  id: string
  imageURL: string
  price: number
  amount: number
}

interface OrderContextType {
  itemsCart: ItemProps[]
  addItemToCart: (item: ItemProps) => void
  removeItemFromCart: (id: string) => void
  clearCart: () => void
  increaseItemInCartAmount: (itemName: string) => void
  decreaseItemInCartAmount: (itemName: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [itemsCart, setItemsCart] = useState<ItemProps[]>([])

  function increaseItemInCartAmount(itemName: string) {
    const newItemsCart = itemsCart.map((item) => {
      if (item.id === itemName) {
        item.amount += 1
      }
      return item
    })

    setItemsCart([...newItemsCart])
  }

  function decreaseItemInCartAmount(itemName: string) {
    const newItemsCart = itemsCart.map((item) => {
      if (item.id === itemName) {
        item.amount > 1 ? (item.amount -= 1) : (item.amount = 1)
      }
      return item
    })

    setItemsCart([...newItemsCart])
  }

  function addItemToCart({ id, imageURL, amount, price }: ItemProps) {
    const alreadyInCart = itemsCart.find((item) => item.id === id)
    if (alreadyInCart) {
      return window.alert(`${id} já foi adicionado ao carrinho`)
    }

    setItemsCart((state) => [...state, { id, imageURL, amount, price }])
  }

  function removeItemFromCart(id: string) {
    const newItemsCart = itemsCart.filter((item) => item.id !== id)

    setItemsCart((state) => [...newItemsCart])
  }

  function clearCart() {
    setItemsCart([])
  }

  return (
    <OrderContext.Provider
      value={{
        itemsCart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        increaseItemInCartAmount,
        decreaseItemInCartAmount,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
