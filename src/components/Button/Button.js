import './Button.css'

const Button = ({ text, handleClick, type, wide }) => {
  return (
    <button
      className={wide ? 'wide' : ''}
      type={type || 'button'}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
