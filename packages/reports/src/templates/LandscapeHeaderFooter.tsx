import React from 'react';
import { Document, Font, View }  from '@react-pdf/renderer';
import { LandscapePage } from '../pdf/layout/Page';
import Header from '../pdf/layout/Header';
import Footer from '../pdf/layout/Footer';

export function LandscapeHeaderFooter() {
  return (
    <Document>
      <LandscapePage>
        <Header />
        <View style={{ flex: 'auto' }} />
        <Footer />
      </LandscapePage>
    </Document>
  );
}
export default LandscapeHeaderFooter;
