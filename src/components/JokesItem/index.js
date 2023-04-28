import styles from './index.module.css'

const JokesItem = (props) => {
  return (
    <li className={styles.item}>
      {props.children}
    </li>
  )
}

export default JokesItem