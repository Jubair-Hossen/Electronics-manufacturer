import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PasswordReset from './Components/PasswordReset/PasswordReset';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Deshboard from './Pages/Deshboard/Deshboard';
import MyProfile from './Pages/Deshboard/MyProfile';
import AddReview from './Pages/Deshboard/AddReview';
import MyOrder from './Pages/Deshboard/MyOrder';
import AddProduct from './Pages/Deshboard/AddProduct';
import MakeAdmin from './Pages/Deshboard/MakeAdmin';
import ProtectedRout from './Components/ProtectedRout';
import RequireAdmin from './Components/RequireAdmin';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/deshboard' element={<ProtectedRout><Deshboard /></ProtectedRout>}>
          <Route index element={<MyProfile />} />
          <Route path='my-order' element={<MyOrder />} />
          <Route path='add-review' element={<AddReview />} />
          <Route path='add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='make-admin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
        </Route>

        <Route path='/purchase/:id' element={<ProtectedRout><Purchase /></ProtectedRout>} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/resetpassword' element={<PasswordReset />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
