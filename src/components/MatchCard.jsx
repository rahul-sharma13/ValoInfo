import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, arrayUnion, updateDoc } from 'firebase/firestore';

const MatchCard = ({ match, index }) => {
    const [savedMatch, setSavedMatch] = useState(false);
    const { user } = UserAuth();

    const matchPath = doc(db, "users", `${user?.email}`);

    const saveMatch = async () => {
        if (user?.email) {
            setSavedMatch(true);
            await updateDoc(matchPath, {
                watchList: arrayUnion({
                    team_one: match.match.teams[0].name,
                    team_two: match.match.teams[1].name,
                    score_one: match.match.teams[0].game_wins,
                    score_two: match.match.teams[1].game_wins,
                    time: match.date,
                    id: match.match.id,
                    league: match.league.name,
                    icon: match.league.icon
                }),
            });
        } else {
            alert("Please sign in!");
        }
    };

    return (
        <div className="flex flex-row relative" >
            <div
                className={`mx-auto bg-accent mt-8 flex min-w-[1000px] items-center h-20 rounded-2xl shadow-lg hover:-translate-y-2 transform transition-all duration-300`}
            >
                {/* first */}
                <div className="ml-5 text-[13px] font-normal flex justify-center items-center gap-2">
                    <img src={match?.league?.icon} className='h-10 object-contain' />
                    {match?.league?.name}
                </div>
                <div className="flex gap-3 text-[16px] mx-auto">
                    {/* team name & scores */}
                    <div>
                        {match.match?.teams[0]?.name}
                    </div>
                    <div className="flex">
                        <div className={`${match.match?.teams[0]?.has_won ? "text-green-300" : "text-red-300"}`}>{match.match?.teams[0].game_wins}</div>
                        <div>&nbsp;:&nbsp;</div>
                        <div className={`${match.match?.teams[1]?.has_won ? "text-green-300" : "text-red-300"}`}>{match.match?.teams[1].game_wins}</div>
                    </div>
                    <div>{match.match?.teams[1].name}</div>
                </div>

                {/* third */}
                <div className="mr-5 text-[13px] uppercase">{match?.state} <span className='text-gray-400'>| {match?.date.slice(0, 10)} </span></div>
            </div>
            <div onClick={saveMatch}>
                {savedMatch ? (<AiFillStar className="absolute top-16 cursor-pointer left-48" />) : (<AiOutlineStar className="absolute top-16 cursor-pointer left-48" />)}
            </div>
        </div>
    )
}

export default MatchCard