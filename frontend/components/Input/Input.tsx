const Input = ({
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
      <label>
        <p>
          {title}&nbsp;
          {required && <span className='required'>*</span>}
        </p>
        <input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={className}
          value={value}
          disabled={disabled}
        />
      </label>
    </>
  )
}

export default Input
