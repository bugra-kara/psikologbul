import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Home, Contact, Kvvk, UsefulLinks } from './pages';
import { Layout } from './components'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/yararli-linkler' element={<UsefulLinks/>}/>
          <Route path='/iletisim' element={<Contact/>}/>
          <Route path='/kvvk' element={<Kvvk/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;