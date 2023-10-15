import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, arrayUnion, updateDoc } from 'firebase/firestore';

const MatchCard = ({
    team_one_name,
    team_two_name,
    team_one_score,
    team_two_score,
    event_name,
    eta,
    index,
}) => {
    const [savedMatch, setSavedMatch] = useState(false);
    const { user } = UserAuth();

    const matchPath = doc(db, "users", `${user?.email}`);

    const saveMatch = async () => {
        if (user?.email) {
            setSavedMatch(true);
            await updateDoc(matchPath, {
                watchList: arrayUnion({
                    team_one: team_one_name,
                    team_two: team_two_name,
                    score_one: team_one_score,
                    score_two: team_two_score,
                    time: eta,
                }),
            });
        } else {
            alert("Please sign in!");
        }
    };

    return (
        <div className="flex flex-row relative">
            <div
                className={`mx-auto bg-accent mt-8 flex min-w-[1000px] items-center h-20 rounded-2xl shadow-lg  ${index == 9 ? "mb-5" : "mb-0"
                    } hover:-translate-y-2 transform transition-all duration-300`}
            >
                {/* first */}
                <div className="ml-5 text-[13px] font-normal">
                    {event_name.substring(0, 25)}...
                </div>
                <div className="flex gap-3 text-[16px] mx-auto">
                    {/* team name & scores */}
                    <div>{team_one_name}</div>
                    <div className="flex">
                        <div>{team_one_score}</div>
                        <div>&nbsp;:&nbsp;</div>
                        <div>{team_two_score}</div>
                    </div>
                    <div>{team_two_name}</div>
                </div>
                {/* third */}
                <div className="mr-5 text-[13px]">Completed | {eta}</div>
            </div>
            <div onClick={saveMatch}>
                {savedMatch ? (<AiFillStar className="absolute top-16 cursor-pointer left-48" />) : (<AiOutlineStar className="absolute top-16 cursor-pointer left-48" />)}
            </div>
        </div>
    )
}

export default MatchCard