import { ItemProps } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  INCREASE_ITEM_AMOUNT = 'INCREASE_ITEM_AMOUNT',
  DECREASE_ITEM_AMOUNT = 'DECREASE_ITEM_AMOUNT',
  CLEAR_CART = 'CLEAR_CART',
}

export function addItemToCartAction(newItem: ItemProps) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newItem,
    },
  }
}

export function removeItemFromCartAction(newItemsCart: ItemProps[]) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      newItemsCart,
    },
  }
}

export function increaseItemAmountAction(newItemsCart: ItemProps[]) {
  return {
    type: ActionTypes.INCREASE_ITEM_AMOUNT,
    payload: {
      newItemsCart,
    },
  }
}

export function decreaseItemAmountAction(newItemsCart: ItemProps[]) {
  return {
    type: ActionTypes.DECREASE_ITEM_AMOUNT,
    payload: {
      newItemsCart,
    },
  }
}

export function clearCartAction() {
  const cartClean: ItemProps[] = []

  return {
    type: ActionTypes.CLEAR_CART,
    payload: {
      cartClean,
    },
  }
}
