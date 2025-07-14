import React, { PropsWithChildren } from 'react';

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

// Botão de "Anterior" e "Próximo"
export const PrevNextButton = React.forwardRef<HTMLButtonElement, PropType>((props, ref) => {
  const { children, ...restProps } = props;
  return (
    <button ref={ref} type="button" {...restProps}>
      {children}
    </button>
  );
});
PrevNextButton.displayName = 'PrevNextButton';


type DotButtonPropType = PropType & {
  selected?: boolean;
};

export const DotButton = React.forwardRef<HTMLButtonElement, DotButtonPropType>((props, ref) => {
    const { selected, ...restProps } = props
    return (
        <button type="button" {...restProps} />
    )
})
DotButton.displayName = 'DotButton';