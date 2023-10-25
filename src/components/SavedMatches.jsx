import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';

const SavedMatches = () => {
    const [matches, setMatches] = useState([]);
    const { user } = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMatches(doc?.data()?.watchList)
        })
    }, [user?.email])


    return (
        <div>
            {matches.length == 0 ? (<p className=' leading-7'>You don't have any matches saved. Please save a match to add it to watch list.<br /> <Link to='/matches' className='text-accent'>Click here to search.</Link></p>) : (

                matches?.map((match) => (
                    <div
                        className={`mx-auto bg-accent mt-8 flex min-w-[1000px] items-center h-20 rounded-2xl shadow-lg hover:-translate-y-2 transform transition-all duration-300`}
                        key={match?.id}
                    >
                        {/* first */}
                        <div className="ml-5 text-[13px] font-normal flex justify-center items-center gap-2">
                            <img src={match?.icon} className='h-10 object-contain' />
                            {match?.league}
                        </div>
                        <div className="flex gap-3 text-[16px] mx-auto">
                            {/* team name & scores */}
                            <div>
                                {match?.team_one}
                            </div>
                            <div className="flex">
                                <div >{match?.score_one}</div>
                                <div>&nbsp;:&nbsp;</div>
                                <div>{match?.score_two}</div>
                            </div>
                            <div>{match?.team_two}</div>
                        </div>

                        {/* third */}
                        <div className="mr-5 text-[13px] "> {match?.time.slice(0, 10)} </div>

                    </div>
                ))

            )}
        </div>
    )
}

export default SavedMatches;