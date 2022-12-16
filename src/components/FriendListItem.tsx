import React from 'react'
import { isTemplateSpan } from 'typescript';
import "../css/friendList.css"

interface Props {
  items: any;
}

export default function FriendListItem(props: Props) {
  return (
    <div className="friendItem">
      Name: {props.items.name}
      HighScore: {props.items.highscore}
    </div>
  )
}
