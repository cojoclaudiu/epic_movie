import React from 'react';
import ClapperboardFill from '../Icons/ClapperboardFill';
import styles from './icon.module.css';

type IconProps = {
  name: 'clapperboard-fill';
};

const selectedIcon = (name: string) => {
  switch (name) {
    case 'clapperboard-fill':
      return <ClapperboardFill />;
  }
};

function Icon({ name }: IconProps) {
  return <div className={styles.iconContainer}>{selectedIcon(name)}</div>;
}

export default Icon;
