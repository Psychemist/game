import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CommunityItem from './CommunityItem';

export default function Community() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    getAllPlayer()
  }, [])

  const getAllPlayer = async () => {
    try {
      const res = await fetch('http://localhost:8000/user/');

      if (res.ok) {
        let data = await res.json();
        console.log("data: ", data)
        setUsers(data.userResult)
      } else {
        console.log("res not okay")
      }
    } catch (e) {
      console.log(e);
    }
  };



  return (
    <>
      <div>
        <div>
          ID
        </div>
        <div>
          Name
        </div>

      </div>
      <div>
        All Users:
        {users.map((item: any) => (
          <CommunityItem items={item} key={`user_${item.id}`} />
        ))
        }
      </div>
    </>
  )
}
