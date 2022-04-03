import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BoardList } from '@/components';

const Router: React.VFC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<BoardList />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
