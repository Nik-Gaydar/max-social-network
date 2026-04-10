import styles from './Title.module.scss'

interface ITitle {
  tag: 'h2' | 'h3'
  className: string
  content: string
}

const Title = ({ tag: Tag, className, content }: ITitle) => {
  return <Tag className={`${styles[className]}`}>{content}</Tag>
}

export default Title
