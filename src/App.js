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
import UpdateProfile from './Pages/Deshboard/UpdateProfile';
import ManageProduct from './Pages/Deshboard/ManageProduct';
import ManageOrders from './Pages/Deshboard/ManageOrders';
import NotFound from './Pages/NotFound/NotFound';
import Myprotfolio from './Pages/Myprotfolio/Myprotfolio';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/my-portfolio' element={<Myprotfolio />} />

        <Route path='/deshboard' element={<ProtectedRout><Deshboard /></ProtectedRout>}>
          <Route index element={<MyProfile />} />
          <Route path='edit-profile/:email' element={<UpdateProfile />} />
          <Route path='my-order' element={<MyOrder />} />
          <Route path='add-review' element={<AddReview />} />
          <Route path='manage-all-orders' element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
          <Route path='add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='manage-products' element={<RequireAdmin><ManageProduct /></RequireAdmin>} />
          <Route path='make-admin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
        </Route>

        <Route path='/purchase/:id' element={<ProtectedRout><Purchase /></ProtectedRout>} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/resetpassword' element={<PasswordReset />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
