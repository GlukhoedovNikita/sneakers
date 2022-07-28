import { FC, useState } from 'react'
import cn from 'classnames'

import { LikeProps } from './Like.types'

import styles from './Like.module.scss'

import like from '@assets/img/like.svg'
import likeActive from '@assets/img/like-active.svg'

const Like: FC<LikeProps> = ({ className, active, ...props }) => {
    const [hover, setHover] = useState<boolean>(false)

    const hoverTrueHandler = () => setHover(true)
    const hoverFalseHandler = () => setHover(false)

    return (
        <button
            className={cn(className, styles.Container, {
                [styles.Active]: active,
            })}
            onMouseOver={hoverTrueHandler}
            onMouseOut={hoverFalseHandler}
            {...props}
        >
            <img
                width={20}
                height={20}
                src={active || hover ? likeActive : like}
                alt="Like Icon"
            />
        </button>
    )
}

export default Like
