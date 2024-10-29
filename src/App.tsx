import { Home } from "./_root/pages/";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import StripeSettings from "./_root/pages/StripeSettings";

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* Public Routes can be viewed by anyone */}
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SigninForm />} />
                    <Route path='/sign-up' element={<SignupForm />} />
                </Route>

                {/* Private Routes, only visible after log in */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/settings' element={<StripeSettings />} />
                </Route>
            </Routes>
        </main>
    );
};

export default App;
