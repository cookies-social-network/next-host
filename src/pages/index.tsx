import { EChatGroup } from 'entities/chat/e-chat-group'
import { EMessageCard } from 'entities/message/e-message-card'

import { messagesData } from 'shared/mocks'

import styles from 'assets/styles/pages/HomePage.module.scss'

const Index = () => {
  return (
    <div>
      <h1 className={'color-blue-2'}>Home page</h1>

      <h2>Chats</h2>

      <div className={styles['home-page__content']}>
        <div className={'d-flex w-100'}>
          <div className={'w-100'}>
            {messagesData.map((chat) => (
              <EMessageCard key={chat.id} chat={chat} />
            ))}
          </div>

          <div className={`${styles['home-page__messages-divider']} divider`} />
        </div>

        <div className={styles['home-page__groups']}>
          {messagesData.map((chat) => (
            <EChatGroup key={chat.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
