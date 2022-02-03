import React, { ReactNode } from 'react';

type Props = {
    title: string,
    children: ReactNode;
};
const Card = ({children, title}: Props) => {
  return (
        <div>
            <div>
                <p>{title}</p>
            </div>
            {children}
        </div>
    );
};

export default Card;
