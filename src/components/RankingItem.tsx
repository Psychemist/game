import React from 'react'

interface Props {
  items: any;
}

export default function RankingItem(props: Props) {
  return (
    <div>
      User: {props.items.name}
    </div>
  )
}
