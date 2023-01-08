import { createContext, ReactNode, useState } from 'react'

interface ItemProps {
  id: string
  imageURL: string
  price: number
  amount: number
}

interface NewOrderData {
  address: {
    ZIPCode: string
    Street: string
    BuildingNumber: string
    Complement?: string | undefined
    Neighborhood: string
    City: string
    State: string
    FormOfPayment: string
  }
  selectedItem: ItemProps[]
  totalPrice: number
}

interface OrderContextType {
  itemsCart: ItemProps[]
  orders: NewOrderData[]
  addItemToCart: (item: ItemProps) => void
  removeItemFromCart: (id: string) => void
  clearCart: () => void
  increaseItemInCartAmount: (itemName: string) => void
  decreaseItemInCartAmount: (itemName: string) => void
  createNewOrder: (order: NewOrderData) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orders, setOrder] = useState<NewOrderData[]>([])

  const [itemsCart, setItemsCart] = useState<ItemProps[]>([])

  function createNewOrder(order: NewOrderData) {
    setOrder((state) => [...state, order])
  }

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
        orders,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        increaseItemInCartAmount,
        decreaseItemInCartAmount,
        createNewOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
