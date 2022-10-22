import React from "react";
/* import '../../styles/_card.scss' */
import { css } from "aphrodite";
import styles from './styles';

const CardSection = (props) => {
    return (
    <>
        <div className={css(styles.cardComponent)}>
            {
                props.fluid?
                props.children
                :<div className={props.className}>
                    {props.children}
                </div>
            }
        </div>
    </>
    );
}

export default CardSection;
