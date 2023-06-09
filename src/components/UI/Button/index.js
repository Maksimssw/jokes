import styles from './index.module.css'

const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button