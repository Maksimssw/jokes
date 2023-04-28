import styles from './index.module.css'
import JokesItem from "../JokesItem";

const JokesList = () => {
  return (
    <ul className={styles.jokes}>
      <JokesItem>
        When I see lovers' names carved in a tree, I don't think it's sweet. I just think it's surprising how many people bring a knife on a date.
      </JokesItem>
    </ul>
  )
}

export default JokesList