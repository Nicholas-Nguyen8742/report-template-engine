import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import theme from '../../utils/styles';
import logoImage from '../../../public/images/Logo-Icon.png';

export default function Header() {
  return (
    <View style={styles.header} fixed>
      <View style={styles.headerBorder} />
      <View style={styles.headerMain}>
        <View style={styles.headerMainContent}>
          <Image style={styles.headerLogo} src={logoImage}/>
          <Text style={styles.headerReportName}>{'Title'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    zIndex: 1,
    width: '792px',
    height: '110px',
    padding: '12px',
  },
  headerBorder: {
    height: '84px',
    width: '768px',
    position: 'absolute',
    border: '1px solid #7485B8',
    borderBottom: 'none',
  },
  headerMain: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  headerMainContent: {
    paddingTop: '16px',
    paddingLeft: '16px',
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 41.666667%',
    maxWidth: '41.666667%',
  },
  headerLogo: {
    width: '65px',
  },
  headerReportName: {
    fontSize: '22pt',
    lineHeight: 0.91,
    fontWeight: 200,
    fontFamily: 'AauxNext',
    width: '180px',
    marginTop: '2px',
    marginLeft: '10px',
    color: 'white',
  },
});
