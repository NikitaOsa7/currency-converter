import React, { lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';
import Footer from 'components/Footer';

const CurrencyConverter = lazy(() => import('components/CurrencyConverter'));

export default function App() {
  return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/currency-converter"
                element={<CurrencyConverter />}
              />
            </Routes>
          </Suspense>
        </Container>
        <Footer />
      </>
  );
}
