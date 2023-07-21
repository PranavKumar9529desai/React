import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Layout from './pages/Layout.js';
import Blogs from './pages/blog.js';
import NoPage from "./pages/NoPage";


export default function App() {
    return (
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />

    </Route>
    </Routes>
    
</BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);