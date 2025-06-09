import React, { useState } from 'react';
import styles from './CategoryFilter.module.css';

const iconMap = {
  all: '🏠',
  electronics: '📱',
  kitchen: '🔍',
  groceries: '🛒',
  clothing: '👕',
  personal_care: '💄'
};

export default function CategoryFilter({ categories, onChange }) {
  const [selected, setSelected] = useState('all');

  const handleClick = (cat) => {
    setSelected(cat);
    onChange(cat);
  };

  return (
    <div className={styles['category-filter']}>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles['category-btn-react']} ${selected === cat ? styles.active : ''}`}
          onClick={() => handleClick(cat)}
        >
          <span className="icon">{iconMap[cat]}</span>
          <span className="text">{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
        </button>
      ))}
    </div>
  );
}
