import styles from './Input.module.scss'

interface Props {
  title: string
  type?: string
  name: string
  required?: boolean
  placeholder?: string
  className?: string
  value: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({
  title,
  type = 'text',
  name,
  required = false,
  onChange,
  placeholder,
  className,
  value,
  disabled,
}) => {
  return (
    <>
      <label className={styles.wrapper}>
        <p>
          {title}&nbsp;
          {required && <span className='required'>*</span>}
        </p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={className}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    </>
  )
}

export default Input
