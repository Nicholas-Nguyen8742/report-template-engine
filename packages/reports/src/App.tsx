import ReactDOM from 'react-dom/client';
import { PDFViewer } from '@react-pdf/renderer';
import LandscapeHeaderFooter from './templates/LandscapeHeaderFooter';

const App = (
  <PDFViewer
    showToolbar
    width={900}
    height={800}
  >
    <LandscapeHeaderFooter />
  </PDFViewer>
);


ReactDOM.createRoot(document.getElementById('root')!).render(App);
