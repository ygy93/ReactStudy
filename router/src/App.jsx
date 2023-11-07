import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Video from './pages/Video.jsx';
import NotFound from './pages/NotFound.jsx';
import Root from './pages/Root.jsx';
import VideoDetail from './pages/VideoDetail.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    errorElement : <NotFound />,
    children : [ /* 상단에 자식 주소로 들어가는 모든 주소들을 넣어주는것이 좋음 */
      { index : '/', element : <Home /> }, /* index 페이지이므로 path 대신 index 로 써도됨 */
      { path : '/video', element : <Video /> },
      { path : '/video/:videoId', element : <VideoDetail /> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
