import React from 'react';
import {EProfileCard} from "@/entities/profile/card";
import {FAddToFriends} from "features/friends";

export const WProfileCard = () => {
  return (
    <EProfileCard
      slots={{
        addToFriends: <FAddToFriends />
      }}
    />
  );
};
