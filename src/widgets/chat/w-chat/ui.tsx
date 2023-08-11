import { EChatCard } from 'entities/chat/e-chat-card'
import { EMessageSend } from 'entities/chat/e-message-send'

export const WChat = () => {
  const tempArray: number[] = [1, 2, 3, 4]

  return (
    <div>
      {tempArray.map((index) => (
        <EChatCard key={index} />
      ))}

      <EMessageSend />
    </div>
  )
}
