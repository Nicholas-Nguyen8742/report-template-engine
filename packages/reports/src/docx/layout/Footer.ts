import { Footer, Paragraph } from 'docx';
import { DISCLAIMER } from '../../utils/constants';

export const footer = new Footer({
  children: [new Paragraph(DISCLAIMER)]
});
