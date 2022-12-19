import React, { useEffect, useState } from 'react'
import FriendListItem from './FriendListItem';
import { friendListFromDB } from '../utils/friendListFromDB';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


export default function FriendList() {

  const [friendList, setFriendList] = useState<any[]>([])
  const userId = useSelector((state: RootState) => state.user.id);

  console.log("userId: ", userId)


  useEffect(() => {
    const getAllFriends = async () => {
      try {
        // const res = await fetch('http://localhost:8000/user/<userid>/friends', {
        //   method: 'PUT',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({

        //   }),
        // });
        // if (res.ok) {
        //   console.log("successfully loaded friends")
        // } else {
        //   console.log("load friends failed")
        // }

        // let result = await res.json();
        // setFriendList(result.friends)

        // NOTE: Assuming we get the player list from DB, which supposed is got from the above fetching.
        setFriendList(friendListFromDB)

      } catch (e) {
        console.log(e);
      }
    }

    getAllFriends()
  }, [])


  return (
    <div>
      Top 10 Players:

      {friendList.map((item: any) => (
        <FriendListItem items={item} key={item.id} />
      ))}

    </div>
  )

}


