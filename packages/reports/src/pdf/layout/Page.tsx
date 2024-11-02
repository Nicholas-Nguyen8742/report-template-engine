import React from 'react';
import { Page, PageProps } from '@react-pdf/renderer';
import { PropsWithChildren, ReactElement } from 'react';


type PDFPageProps = PropsWithChildren<PageProps>;

export function LandscapePage({ children, ...otherProps }: PDFPageProps): ReactElement<PDFPageProps> {
  return (
    <Page size="LETTER" orientation='landscape' {...otherProps}>
      { children }
    </Page>
  );
};

export function VerticalPage({ children, ...otherProps }: PDFPageProps): ReactElement<PDFPageProps> {
  return (
    <Page size="LETTER" {...otherProps}>
      { children }
    </Page>
  );
};
