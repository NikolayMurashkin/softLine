import React from 'react';
import ReactDOM from 'react-dom/client';

import { Layout } from './app/layout/Layout';
import { MainPage } from './pages/MainPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Layout>
			<MainPage />
		</Layout>
	</React.StrictMode>
);
