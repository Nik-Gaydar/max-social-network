import styles from './Text.module.scss'

interface TextProps {
  variant: string
  children: string | number
}

const Text = ({ variant, children }: TextProps) => {
  return <p className={styles[variant]}>{children}</p>
}

export default Text
