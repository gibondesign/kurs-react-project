import './styles/theme.css'
import './styles/globals.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Favourites } from './views/Favourites/Favourites.jsx'
import { Cart } from './views/Cart/Cart.jsx'
import { Layout } from './components/Layout/Layout.jsx'
import { MainPage } from './views/MainPage/MainPage.jsx'
import { ProductsList } from './views/ProductsList/ProductsList.jsx'
import { mainPageLoader } from './api/mainPageLoader.js'
import { productListLoader } from './api/productListLoader.js'
import { productDetailsLoader } from './api/productDetailsLoader.js'
import { ProductDetails } from './views/ProductDetails/ProductDetails.jsx'
import { addProductToFavourite } from './api/addProductToFavouriteAction.js'
import { favouritesLoader } from './api/favouritesLoader.js'
import { deleteFavourite } from './api/deleteFavouriteAction.js'

const router = createBrowserRouter([
	{
		path: '/add-to-favourite/:productId',
		action: addProductToFavourite,
	},
	{
		path: '/delete-favourite/:productId',
		action: deleteFavourite,
	},
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '/ulubione',
				element: <Favourites />,
				loader: favouritesLoader,
			},
			{
				path: '/koszyk',
				element: <Cart />,
			},
			{
				path: '/:gender?',
				element: <MainPage />,
				loader: mainPageLoader,
			},
			{
				path: '/:gender/:category/:subcategory?',
				element: <ProductsList />,
				loader: productListLoader,
			},
			{
				path: '/:gender/:category/:subcategory/:productId',
				element: <ProductDetails />,
				loader: productDetailsLoader,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
