import { useRouter } from 'next/router'

import { WChat } from 'widgets/chat/w-chat'

const ChatPage = () => {
  const router = useRouter()
  const chatId = String(router?.query?.id) ?? ''

  return (
    <div className={'chat-page'}>
      <h1>Chat №{chatId}</h1>

      <WChat />
    </div>
  )
}

export default ChatPage
