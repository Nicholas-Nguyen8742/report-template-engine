import { Paragraph, Table, TableCell, TableRow } from 'docx';

export const table = new Table({
  rows: [
      new TableRow({
          children: [
              new TableCell({
                  children: [new Paragraph("Hello")],
              }),
              new TableCell({
                  children: [],
              }),
          ],
      }),
      new TableRow({
          children: [
              new TableCell({
                  children: [],
              }),
              new TableCell({
                  children: [new Paragraph("World")],
              }),
          ],
      }),
  ],
});