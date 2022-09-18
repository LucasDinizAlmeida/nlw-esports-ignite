import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 20,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    marginRight: 16
  },
  button: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: THEME.COLORS.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    marginLeft: 10,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD
  }
});