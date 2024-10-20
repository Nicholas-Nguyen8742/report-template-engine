import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { formatFullDate } from '../../utils/format';
import { DISCLAIMER } from '../../utils/constants';

export default function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.disclaimer}>
        {DISCLAIMER}
      </Text>
      <View style={styles.datePageNumber}>
        <Text>
          {formatFullDate()}
        </Text>
        <Text
          render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    height: '50px',
    width: '792px',
    padding: '8px',
    zIndex: 1,
  },
  disclaimer: {
    flex: '0 0 83.333333%',
    maxWidth: '83.333333%',
    fontSize: 7,
    color: 'grey',
  },
  datePageNumber: {
    flex: '0 0 16.666666%',
    maxWidth: '16.666666%',
    height: '100%',
    fontSize: 7,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    color: 'grey',
  },
});
