import React from 'react';
import Icon from '../Icon';
import styles from './sidebarMenu.module.css';

function SidebarMenu() {
  return (
    <aside className={styles.sidebarMenu}>
      <div className={styles.logo}>EPIC MOVIE</div>
      <Icon name="clapperboard-fill" />
    </aside>
  );
}

export default SidebarMenu;
