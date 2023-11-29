import { CardContent } from "../card"

export interface ContentCardInfoProps {
  children: React.ReactNode
  wind?: boolean
}

export function ContentCardInfo({ children, wind }: ContentCardInfoProps) {
  return (
    <CardContent className="flex-1 flex">
      <div className="flex items-end h-fit gap-2">
        <p className="text-6xl font-medium pl-5 h-fit">{children}</p>
        {wind && (<span className="text-lg">Km/h</span>)}
      </div>
    </CardContent>
  )
}