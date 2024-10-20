import { Document, Font, View } from '@react-pdf/renderer';
import { LandscapePage } from '../pdf/layout/Page';
import Header from '../pdf/layout/Header';
import Footer from '../pdf/layout/Footer';

Font.register({ family: 'AauxNext', fonts: [
  { src: '/fonts/AauxNext/AauxNext_Thin.ttf', fontWeight: 200 },
  { src: '/fonts/AauxNext/AauxNext_Light.ttf', fontWeight: 300 },
  { src: '/fonts/AauxNext/AauxNext_Regular.ttf' },
  { src: '/fonts/AauxNext/AauxNext_Medium.ttf', fontWeight: 500 },
  { src: '/fonts/AauxNext/AauxNext_Bold.ttf', fontWeight: 700 },
  { src: '/fonts/AauxNext/AauxNext_Black.ttf', fontWeight: 800 },
  { src: '/fonts/AauxNext/AauxNext_Thin_Italic.ttf', fontStyle: 'italic', fontWeight: 200 },
  { src: '/fonts/AauxNext/AauxNext_Light_Italic.ttf', fontStyle: 'italic', fontWeight: 300 },
  { src: '/fonts/AauxNext/AauxNext_Regular_Italic.ttf', fontStyle: 'italic' },
  { src: '/fonts/AauxNext/AauxNext_Medium_Italic.ttf', fontStyle: 'italic', fontWeight: 500 },
  { src: '/fonts/AauxNext/AauxNext_Bold_Italic.ttf', fontStyle: 'italic', fontWeight: 700 },
  { src: '/fonts/AauxNext/AauxNext_Black_Italic.ttf', fontStyle: 'italic', fontWeight: 800 },
 ]});
 
 function LandscapeHeaderFooter() {
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
