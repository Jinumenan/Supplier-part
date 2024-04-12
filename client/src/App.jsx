import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Supplier_createProduct from './pages/SubSupplier/Supplier_createProduct';
import ProductDetails from './pages/ProductDetails';
import Payment from './pages/SubSupplier/Payment';
import Profile from './pages/SubSupplier/Profile'; 
import Supplier_updateProduct from './pages/SubSupplier/Supplier_updateProduct';
import ProfileDisplay from '../src/pages/ProfileDisplay';
import PaymentDisplay from './pages/PaymentDisplay';
import UpdateProfileDetails from './pages/SubSupplier/UpdateProfileDetails';
import PaymentUpdate from './pages/SubSupplier/PaymentUpdate';


function App() {
    return (
    <div className="App">
        <Router>
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/createproduct" element={<Supplier_createProduct/> } />
            <Route path="/paymentdetails" element={<Payment/>} />
            <Route path="/updateproduct/:id" element={<Supplier_updateProduct/>} />
            <Route path="/profiledisplay" element={<ProfileDisplay />} /> 
            <Route path="/paymentdisplay" element={<PaymentDisplay />} />
            <Route path="/UpdateProfileDetails/:id" element={<UpdateProfileDetails/>} />
            <Route path="/PaymentUpdate/:id" element={<PaymentUpdate/>} />
        </Routes>
        </Router>
    </div>
    );
}

export default App;
