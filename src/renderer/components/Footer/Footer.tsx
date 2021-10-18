import React from 'react';
import IFooterProps from './props.interface';

export default function Footer(props: Partial<IFooterProps>) {
  return (
    <div className={['footer', props.classes || ''].join(' ')}>
      {props.children}
    </div>
  );
}
