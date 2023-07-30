import React, {FC, ReactElement, ReactNode} from 'react';
import {renderSlot} from "shared/lib/utils";
import {SlotsType} from "shared/types";

interface IProps {
  slots: SlotsType
  children?: ReactNode
}

export const EProfileCard: FC<IProps> = ({
  slots,
}) => {
  return (
    <div>
      Profile
      { renderSlot(slots.addToFriends) }
    </div>
  );
};

