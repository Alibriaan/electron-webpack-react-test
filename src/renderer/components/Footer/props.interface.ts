import { ReactChildren, ReactElement } from 'react';
import IFooterNavigation from '../../interfaces/footer-navigation.interface';

interface IFooterProps {
  navigation: IFooterNavigation[];
  classes?: string;
  children?: ReactElement | ReactChildren;
}

export default IFooterProps;
