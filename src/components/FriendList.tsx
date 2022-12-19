import React, { useEffect, useState } from 'react'
import FriendListItem from './FriendListItem';
import { friendListFromDB } from '../utils/friendListFromDB';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import "../css/friendList.css"



export default function FriendList() {

  const [friendList, setFriendList] = useState<any[]>([])
  const userId = useSelector((state: RootState) => state.user.id);
  console.log("userId: ", userId)


  useEffect(() => {
    getAllFriends()
  }, [])

  const getAllFriends = async () => {
    try {
      const res = await fetch(`http://localhost:8000/user/id/${userId}/friends`);
      if (res.ok) {
        console.log("successfully loaded friends")
      } else {
        console.log("load friends failed")
      }

      let result = await res.json();
      console.log("result.friendResult: ", result.friendResult)
      setFriendList(result.friendResult)

    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="friendListContainer">

      {friendList.map((item: any) => (
        <FriendListItem items={item} key={`friend_${item.user_friend_id}`} />
      ))}

    </div>
  )

}


