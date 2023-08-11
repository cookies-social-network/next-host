export type SMessageType = {
  name: string
  message: string // TODO: Будет иначе называться. Пока что так.
  id: number
  time: string // TODO: Добавить утилиту для обработки времени или даты.
  status: SMessageReadStatus // Прочитано или нет.
  userId: number
}

export type SMessageReadStatus = 'read' | 'notRead'
