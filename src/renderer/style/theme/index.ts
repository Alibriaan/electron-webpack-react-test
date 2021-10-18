// import { createTheme, Theme } from '@material-ui/core/styles';
// import { Palette, PaletteColor } from '@material-ui/core/styles/createPalette';
import { createTheme, Palette, PaletteColor, Theme } from '@mui/material';
import Modify from '../../types/modify.type';

export interface ITheme extends Theme {
  palette: Modify<
    Palette,
    {
      primary: Modify<
        PaletteColor,
        {
          light: string;
          main: string;
          dark: string;
          disabled: string;
          warning: string;
          error: string;
          success: string;
        }
      >;
    }
  >;
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#3f50b5',
      dark: '#212121',
      disabled: '#d1c4e9',
      warning: '#ffb74d',
      error: '#FF3B30',
      success: '#34C759',
    },
  },
} as ITheme);

export default theme;
