import React from 'react';
import '../../style/GlassContainer/glass-container.css';
import IGlassContainerProps from './props.interface';

export default function GlassContainer(props: IGlassContainerProps) {
  return (
    <div
      className={['glass-container', props?.containerSubClass || ''].join(' ')}
    >
      {props.children}
    </div>
  );
}
