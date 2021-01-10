import types from '../types/types'
import {addWidgetPayload, removeWidgetPayload, updateWidgetPositionPayload} from '../types/payloadTypes'



export const addWidget = (name:string):addWidgetPayload => {
  return {
    type: types.ADD_WIDGET,
    payload: name,
  }
}

export const removeWidget = (index:number):removeWidgetPayload => {
  return {
    type: types.REMOVE_WIDGET,
    payload: index,
  }
}

export const updateWidgetPosition = (index:number, newX:number, newY:number):updateWidgetPositionPayload => {
  return {
    type: types.UPDATE_WIDGET_POSITION,
    payload: {
      index:  index,
      positionX: newX,
      positionY: newY,
    }
  }
}