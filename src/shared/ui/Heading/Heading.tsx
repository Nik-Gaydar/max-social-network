import styles from './Heading.module.scss'

type Tag = 'h2' | 'h3'

interface HeadingProps {
  tag: Tag
  className: string
  children: string
}

const Heading = ({ tag, className, children }: HeadingProps) => {
  const Tag = tag

  return <Tag className={`${styles[className]}`}>{children}</Tag>
}

export default Heading
