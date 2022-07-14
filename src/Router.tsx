import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Rendering from './Rendering/Rendering'
import Main from './Main/Main'
import Mypage from './Mypage/Mypage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rendering />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
