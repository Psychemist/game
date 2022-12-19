import Card from '@mui/material/Card';
import React from 'react'
import { isTemplateSpan } from 'typescript';
import "../css/friendList.css"

interface Props {
  items: any;
}

export default function FriendListItem(props: Props) {
  return (
    <Card className="friendItem">
      <div className="left-wrapper">
        <div>Player: {props.items.name}</div>
      </div>
      <div className="right-wrapper">
        <div>Highest Score: {props.items.score}</div>
      </div>
    </Card>
  )
}
