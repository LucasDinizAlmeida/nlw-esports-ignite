import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 58,
    paddingHorizontal: 32
  },
  arrow: {
    color: THEME.COLORS.CAPTION_300
  },
  logo: {
    width: 72,
    height: 40
  },
  right: {
    width: 20,
    height: 20
  },
  gameImg: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginTop: 32
  },
  containerList: {

  },
  contentList: {
    alignItems: 'flex-start',
    paddingRight: 64
  },
  containerListEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentListEmpty: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,

  }
});