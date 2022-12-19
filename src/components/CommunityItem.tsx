import Button from '@mui/material/Button';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import "../css/community.css"
import Card from '@mui/material/Card';


interface Props {
  items: any;
}

export default function CommunityItem(props: Props) {
  const userId = useSelector((state: RootState) => state.user.id);

  const onAddFriend = async () => {
    console.log('my userId :', userId);
    console.log('Target userId :', props.items.id);

    if (userId == props.items.id) {
      console.log("cannot add myself")
      return
    }

    await fetch(`http://localhost:8000/user/id/${userId}/friends`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        targetId: props.items.id
      }),
    });
  };


  return (
    <Card className="community-item">

      <div className="name-wrapper">{props.items.name}</div>
      <div className="score-wrapper">{props.items.score}</div>
      <Button variant="contained" color="success" size="small" onClick={onAddFriend}>Add Friend</Button>

    </Card>
  )
}
