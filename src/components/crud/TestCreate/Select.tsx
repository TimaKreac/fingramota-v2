import React from 'react'

import styles from './TestCreate.module.scss'

interface Props {
  value: string
  onChange: any
}

const Select: React.FC<Props> = ({ onChange, value }) => {
  return (
    <>
      <label className={styles.selectWrapper}>
        <p>Правильный вариант</p>
        <select
          className={styles.select}
          name='correct_answer'
          value={value}
          onChange={onChange}
        >
          <option value='option_1'>a</option>
          <option value='option_2'>b</option>
          <option value='option_3'>c</option>
          <option value='option_4'>d</option>
          <option value='option_5'>e</option>
        </select>
      </label>
    </>
  )
}

export default Select
