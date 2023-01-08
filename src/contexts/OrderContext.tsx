import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  ActionTypes,
  addItemToCartAction,
  clearCartAction,
  decreaseItemAmountAction,
  increaseItemAmountAction,
  removeItemFromCartAction,
} from '../reducers/itemsCart/actions'
import { ItemProps, itemsCartReducer } from '../reducers/itemsCart/reducer'

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

  const [itemsCart, dispatch] = useReducer(itemsCartReducer, [], () => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:items-cart-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return []
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(itemsCart)

    localStorage.setItem('@coffee-delivery:items-cart-1.0.0', stateJSON)
  }, [itemsCart])

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

    dispatch(increaseItemAmountAction(newItemsCart))
  }

  function decreaseItemInCartAmount(itemName: string) {
    const newItemsCart = itemsCart.map((item) => {
      if (item.id === itemName) {
        item.amount > 1 ? (item.amount -= 1) : (item.amount = 1)
      }
      return item
    })

    dispatch(decreaseItemAmountAction(newItemsCart))
  }

  function addItemToCart(newItem: ItemProps) {
    const alreadyInCart = itemsCart.find((item) => item.id === newItem.id)
    if (alreadyInCart) {
      return window.alert(`${newItem.id} já foi adicionado ao carrinho`)
    }

    dispatch(addItemToCartAction(newItem))
  }

  function removeItemFromCart(id: string) {
    const newItemsCart = itemsCart.filter((item) => item.id !== id)

    dispatch(removeItemFromCartAction(newItemsCart))
  }

  function clearCart() {
    dispatch(clearCartAction())
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
