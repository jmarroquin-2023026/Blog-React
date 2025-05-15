import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({
  field,
  label,
  type = 'text',
  value,
  onChangeHandler,
  className = '',
  labelClassName = '',
  isTextarea = false,
  rows = 3,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={field} className={`${labelClassName}`}>
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          id={field}
          rows={rows}
          value={value}
          onChange={(e) => onChangeHandler(e.target.value, field)}
          className={`${className}`}
          {...props}
        />
      ) : (
        <input
          id={field}
          type={type}
          value={value}
          onChange={(e) => onChangeHandler(e.target.value, field)}
          className={`${className}`}
        />
      )}
    </div>
  )
}

Input.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,

}