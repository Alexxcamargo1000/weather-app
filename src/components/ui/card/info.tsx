import { Card, CardContent, CardHeader } from "../card"


export interface RootCardInfoProps {
  title: string
  content: string
  value: 'km' | '%'
}

export function CardInfo({ title, content, value  }: RootCardInfoProps) {
  return (
    <Card className="min-h-[220px] flex flex-col">
      <CardHeader className="text-muted-foreground text-lg" >
        {title}
      </CardHeader>
      <CardContent className="flex-1 flex">
        <div className="flex items-end h-fit gap-2">
          <p className="text-6xl font-medium pl-5 h-fit">{content}</p>
          {value}
        </div>
      </CardContent>
    </Card>
  )
}