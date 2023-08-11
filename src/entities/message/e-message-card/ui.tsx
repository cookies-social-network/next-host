import Link from 'next/link'
import Avatar from 'public/avatar.jpg'

import styles from 'entities/message/e-message-card/style.module.scss'

import { useUser } from 'shared/lib/hooks'
import { SMessageType } from 'shared/types'
import { SAvatar } from 'shared/ui'

interface IProps {
  chat: SMessageType
}

// TODO: Добавить иконки.
const STATUSES_MAP = {
  read: 'Прочитано',
  notRead: 'Не прочитано',
}

export const EMessageCard = ({ chat }: IProps) => {
  const { user } = useUser()

  return (
    <Link href={`/chat/${chat.id}`} passHref className={styles['e-message-card']}>
      <div className={styles['e-message-card__chat']}>
        <SAvatar className={'mr-12'} src={Avatar} width={48} height={48} />

        <div className={styles['e-message-card__info']}>
          <div className={'color-blue-1 text-md'}>{chat.name}</div>
          <div className={'color-blue-2 text-sm'}>
            {user.id === chat.userId && <b>{`${chat.name}: `}</b>}
            {chat.message}
          </div>
        </div>
      </div>

      <div className={styles['e-message-card__status']}>
        <div className={'color-gray-1 text-sm'}>{chat.time}</div>
        <div className={'color-gary-2 text-sm'}>{STATUSES_MAP[chat.status]}</div>
      </div>
    </Link>
  )
}
