import { Route, Routes } from 'react-router-dom';
import Input from './pages/input/Input';
import Home from './pages/home/Home';
import Overview from './pages/output/overview/Overview';

const App = () => {
    return (
        <main className="bg-black ">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/input" element={<Input />} />
                <Route
                    path="/overview/:name/:age/:gender"
                    element={<Overview />}
                />
            </Routes>
        </main>
    );
};

export default App;
