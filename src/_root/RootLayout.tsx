import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <div className='xl:block h-screen w-1/2'>
                {/* Button linking to the Sign-In page */}
                <Button asChild variant='default' size='lg'>
                    <Link to='/'>Home</Link>
                </Button>

                {/* Button linking to the Sign-In page */}
                <Button asChild variant='default' size='lg'>
                    <Link to='/sign-in'>Sign In</Link>
                </Button>

                {/* Button linking to the Sign-Up page */}
                <Button asChild variant='secondary' size='lg'>
                    <Link to='/sign-up'>Sign Up</Link>
                </Button>
            </div>
            <img
                src='https://placehold.co/800x800'
                alt='logo'
                className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'
            />
        </>
    );
};

export default RootLayout;
