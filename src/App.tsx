import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './components/root/root';
import Home from './components/home/home';
import PrivateCollections from './components/collections/privateCollection';

import Categories from './components/categories/categories';
import Item from './components/item/item';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="privateCollections" element={<PrivateCollections/>}/>
    <Route path="categories/:name" element={<Categories/>}/>
    <Route path="categories/:name/:id" element={<Item/>}/>
  </Route>
))
function App() {

  return (
    <>
    <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App
