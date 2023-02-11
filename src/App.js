import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Home, Contact, Cookies } from './pages';
import { Layout } from './components'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/iletisim' element={<Contact/>}/>
          <Route path='/cerez-politikasi' element={<Cookies/>}/>
          <Route path='*' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
