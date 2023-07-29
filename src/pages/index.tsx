import React from 'react';
import {SButton} from "shared/ui";
import {FRemoveFromFriends} from "features/friends";

const Index = () => {
	return (
		<div>
			<h1>Home page</h1>

      <SButton appearance={'primary'}>
        Some test text
      </SButton>

      <FRemoveFromFriends />
		</div>
	);
};

export default Index;
