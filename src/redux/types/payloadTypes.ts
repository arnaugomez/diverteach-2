

interface addWidgetPayload {
  type: string,
  payload: string,
}
interface removeWidgetPayload {
  type: string,
  payload: number,
}
interface updateWidgetPositionPayload {
  type: string,
  payload: {
  index: number;
  positionX: number;
  positionY: number;
}
}


export type {addWidgetPayload, removeWidgetPayload, updateWidgetPositionPayload}