import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Home, Contact, Cookies, Kvvk } from './pages';
import { Layout } from './components'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/iletisim' element={<Contact/>}/>
          <Route path='/cerez-politikasi' element={<Cookies/>}/>
          <Route path='/kvvk' element={<Kvvk/>}/>
          <Route path='/*' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
