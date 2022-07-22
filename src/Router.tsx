import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Rendering from './Rendering/Rendering'
import Nav from './components/Nav'
import Main from './Main/Main'
import Mypage from './Mypage/Mypage'
import MenuModal from 'components/MenuModal'

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Rendering />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
