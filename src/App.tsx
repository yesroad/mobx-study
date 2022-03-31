import React from 'react';

import { Global } from '@emotion/react';

import { styles } from './assets/styles/Global.styles';

import Router from '@/router';

const App: React.VFC = () => {
	return (
		<>
			<Global styles={styles} />
			<Router />
		</>
	);
};

export default App;
