import {FC, ReactElement, ReactNode} from "react";
import {SButtonPositionType} from "shared/ui/SButton/types";
import {SAppearancesType} from "shared/types";

interface IProps {
  appearance?: keyof SAppearancesType
  icon?: ReactElement
  iconPosition?: SButtonPositionType
  children?: ReactNode
}

export const SButton: FC<IProps> = ({
  appearance = 'primary',
  icon,
  children
}) => {
  return (
    <>
      <button>{children}</button>
    </>
  )
}
