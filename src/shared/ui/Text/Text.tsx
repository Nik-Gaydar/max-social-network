import styles from './Text.module.scss'

interface IText {
  variant: string
  content: string | number
}

const Text = ({ variant, content }: IText) => {
  return <p className={styles[variant]}>{content}</p>
}

export default Text
