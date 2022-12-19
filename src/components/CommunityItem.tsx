import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

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
    <>
      <div>
        {props.items.name}
      </div>
      <div>
        {props.items.score}
      </div>
      <div style={{ backgroundColor: "pink", height: 50, width: 50 }}
        onClick={onAddFriend}>
      </div>

    </>
  )
}
