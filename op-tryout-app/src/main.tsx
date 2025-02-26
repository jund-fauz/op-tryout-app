import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ResultPage from './pages/ResultPage.tsx'
import TryOutPage from './pages/TryOutPage.tsx'

const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/tryout/:id', element: <TryOutPage /> },
	{ path: '/result/:score', element: <ResultPage /> },
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
