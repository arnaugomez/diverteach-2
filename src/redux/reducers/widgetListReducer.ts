// import {addWidgetPayload, removeWidgetPayload, updateWidgetPositionPayload} from '../types/payloadTypes'
import types from '../types/types';

interface widgetInfo {
  name: string;
  positionX: number;
  positionY: number;
}

const initialState: widgetInfo[] = [];

export default function usersReducer(
  state = initialState,
  {type, payload}: any
): widgetInfo[] {
  switch (type) {
    case types.ADD_WIDGET:
      return [
        ...state,
        {
          name: payload.toString(),
          positionX: Math.floor(Math.random() * 400),
          positionY: Math.floor(Math.random() * 400),
        },
      ];
    case types.REMOVE_WIDGET:
      return state.filter((_item, index) => index !== payload);
    case types.UPDATE_WIDGET_POSITION:
      return state.map((item, index) => {
        if (index === payload.index) {
          return {
            name: item.name,
            positionX: payload.positionX ? payload.positionX : 0,
            positionY: payload.positionY ? payload.positionY : 0,
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}
