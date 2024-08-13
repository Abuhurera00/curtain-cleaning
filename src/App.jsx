import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pricing from './components/Pricing';
import Exclusiveservices from './components/Exclusiveservices';
import Booknow from './components/Booknow';
import About from './components/About';
import Faq from './components/Faq';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home />
      <Footer /></>,
    },
    {
      path: "/cleaning-alteration-installation-pricing",
      element: <><Navbar /><Pricing /><Footer />
      </>,
    },
    {
      path: "/mattress-sofa-cleaning",
      element: <><Navbar /><Exclusiveservices /><Footer />
      </>,
    },
    {
      path: "/book-now",
      element: <><Navbar /><Booknow /><Footer />
      </>,
    },
    {
      path: "/about-us",
      element: <><Navbar /><About />
      <Footer /></>,
    },
    {
      path: "/faq",
      element: <><Navbar /><Faq />
      <Footer /></>,
    },
  ]);

  return (
    <React.Fragment>
    <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
