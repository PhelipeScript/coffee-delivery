import { ActionTypes } from './actions'

export interface ItemProps {
  id: string
  imageURL: string
  price: number
  amount: number
}

export function itemsCartReducer(state: ItemProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return [...state, action.payload.newItem]

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      state = action.payload.newItemsCart
      return state

    case ActionTypes.INCREASE_ITEM_AMOUNT:
      state = action.payload.newItemsCart
      return state

    case ActionTypes.DECREASE_ITEM_AMOUNT:
      state = action.payload.newItemsCart
      return state

    case ActionTypes.CLEAR_CART:
      state = action.payload.cartClean
      return state

    default:
      return state
  }
}
