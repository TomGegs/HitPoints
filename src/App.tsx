import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Overview from './pages/output/overview/Overview';
import { NotFound } from './pages/Util/error/NotFound';
import { Loading } from './pages/Util/loading/Loading';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
