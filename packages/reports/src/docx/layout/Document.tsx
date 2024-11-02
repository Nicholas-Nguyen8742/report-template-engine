import { Document, Paragraph, PageOrientation, ImageRun } from 'docx';
import { table } from './Table';
import { footer } from './Footer';
import logoImage from '../../../public/images/Logo-Icon.png';

const doc = new Document({
  sections: [{
      properties: {
          page: {
            margin: {
              top: `${0.1}in`,
              right: `${0.25}in`,
              left: `${0.25}in`,
              bottom: `${0.1}in`,
            },
            size: {
              orientation: PageOrientation.LANDSCAPE,
            },
          },
      },
      children: [new Paragraph({
        children: [
          new ImageRun({
            data: logoImage,
            type: 'png',
            transformation: {
              width: 150,
              height: 85.6,
            },
          })
        ]
      }),table],
      footers: {
        default: footer
      },
  }],
});

export default doc;
