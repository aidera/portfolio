import React, { ReactNode } from 'react';

import styles from './Characteristic.module.scss';

interface CharacteristicProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}

export default function Characteristic(props: CharacteristicProps) {
  return (
    <div className={styles.container}>
      <div className={styles['icon']}>{props.icon}</div>
      <div className={styles['label']}>{props.label}</div>
      <div className={styles['value']}>{props.value}</div>
    </div>
  );
}
