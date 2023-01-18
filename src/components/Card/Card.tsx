import React, { PropsWithChildren, ReactNode } from "react";
import { css } from "aphrodite";
import styles from './styles';

interface ICardSectionProps {
    fluid?: boolean,
    className?: string,
    children: ReactNode
}

const Card = (props: ICardSectionProps) => (
    <div className={css(styles.cardComponent)}>
        {
            props.fluid ?
                <>{props.children}</>
                : <div className={props.className}>
                    <>{props.children}</>
                </div>
        }
    </div>
);


export default Card;
