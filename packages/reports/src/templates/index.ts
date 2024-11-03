// import LandscapeDocumentFooter from '../docx/layout/Document';
import ReactPDF, { Font } from '@react-pdf/renderer';
import LandscapeHeaderFooter from './LandscapeHeaderFooter';

const fontBasePath = new URL('../dist/fonts/', import.meta.url).pathname;
Font.register({ family: 'AauxNext', fonts: [
  { src: `${fontBasePath}AauxNext/AauxNext_Thin.ttf`, fontWeight: 200 },
  { src: `${fontBasePath}AauxNext/AauxNext_Light.ttf`, fontWeight: 300 },
  { src: `${fontBasePath}AauxNext/AauxNext_Regular.ttf` },
  { src: `${fontBasePath}AauxNext/AauxNext_Medium.ttf`, fontWeight: 500 },
  { src: `${fontBasePath}AauxNext/AauxNext_Bold.ttf`, fontWeight: 700 },
  { src: `${fontBasePath}AauxNext/AauxNext_Black.ttf`, fontWeight: 800 },
  { src: `${fontBasePath}AauxNext/AauxNext_Thin_Italic.ttf`, fontStyle: 'italic', fontWeight: 200 },
  { src: `${fontBasePath}AauxNext/AauxNext_Light_Italic.ttf`, fontStyle: 'italic', fontWeight: 300 },
  { src: `${fontBasePath}AauxNext/AauxNext_Medium_Italic.ttf`, fontStyle: 'italic' },
  { src: `${fontBasePath}AauxNext/AauxNext_Medium_Italic.ttf`, fontStyle: 'italic', fontWeight: 500 },
  { src: `${fontBasePath}AauxNext/AauxNext_Bold_Italic.ttf`, fontStyle: 'italic', fontWeight: 700 },
  { src: `${fontBasePath}AauxNext/AauxNext_Black_Italic.ttf`, fontStyle: 'italic', fontWeight: 800 },
 ]});
 
// interface Template {
//   template: any;
//   render: () => Promise<Buffer | any | undefined>;
// }

interface TemplateRepository {
  [key: string]: () => React.JSX.Element | any;
}

const templateRepository: TemplateRepository = {
  // LandscapeDocumentFooter,
  LandscapeHeaderFooter: async function() {
    if (typeof window !== 'undefined') {
      return;
    }
    const report = await ReactPDF.renderToStream(LandscapeHeaderFooter())
    return report;
  },
};

export default templateRepository;
