interface HighlightTextProps {
  value: string
  text: string
}

export const HighlightText: React.FC<HighlightTextProps> = ({
  value,
  text,
}) => {
  const parts = text.split(new RegExp(`(${value})`, 'gi'))

  return (
    <>
      {parts.map((part, index) => (
        <span
          key={index}
          className={
            part.toLowerCase() === value.toLowerCase()
              ? 'text-black'
              : 'text-black/60'
          }
        >
          {part}
        </span>
      ))}
    </>
  )
}
