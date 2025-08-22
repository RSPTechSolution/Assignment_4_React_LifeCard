import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Users from './components/pages/User'
import Footer from './components/layout/Footer';
import UserDetail from './components/pages/UserDetail';
import NotFound from './components/pages/NotFound';
const App = () => {
    return (
        <>
            <div className="bg-gray-50 text-[var(--text-primary)]">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/networks" element={<Users/>} />
                    <Route path="/user/:id" element={<UserDetail/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </div>

        </>
    )
}

export default App;