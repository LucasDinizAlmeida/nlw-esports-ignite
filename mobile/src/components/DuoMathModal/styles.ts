import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8
  },
  closeButton: {
    width: '100%',
    paddingRight: 16,
    paddingTop: 16,
    alignItems: 'flex-end'
  },
  headingStyle: {
    marginVertical: 24,
    alignItems: 'center'
  },
  discordText: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginBottom: 8
  },
  discordContainer: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    width: 232,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32
  },
  discordTitle: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD
  }
});