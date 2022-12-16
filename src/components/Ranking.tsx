import React, { useEffect, useState } from 'react'
import RankingItem from './RankingItem';

export default function Ranking() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    const getAllPlayer = async () => {
      try {
        const res = await fetch(`localhost:8080/user/`, {
          method: 'GET'
        });
        let result = await res.json();
        // setUsers(result.users)


        if (res.ok) {

        } else {

        }
      } catch (e) {
        console.log(e);
      }
    };
    getAllPlayer()
  }, [])

  // Assuming we get the player list from DB



  return (
    <div>
      Top 10 Players:
      {users.map((item: any) => (
        <RankingItem items={item} />
      ))
      }
    </div>
  )
}
