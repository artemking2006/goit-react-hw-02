import React, { useEffect, useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import { setLocal, getLocal } from '../LocalStorage/LocalStorage';

const App = () => {
    const [reaction, setReaction] = useState(() => {
        const savedFeedback = getLocal('savedFeedback');

        if (savedFeedback) {
            return savedFeedback;
        } else {
             return {
            good: 0,
            neutral: 0,
            bad: 0,
        };
      }
    });

    const updateFeedback = (feedbackType) => {
        if (feedbackType !== 'reset') {
            setReaction((prevReaction) => ({
              ...prevReaction,
              [feedbackType]: prevReaction[feedbackType] + 1,
            }));
        } else {
            setReaction({
                good: 0,
                neutral: 0,
                bad: 0,
            });
        } 
    };
    
    const total = reaction.good + reaction.bad + reaction.neutral;

    const positive = total > 0 ? Math.round((reaction.good / total) * 100) + '%' : '0%';

    useEffect(() => {
      setLocal('savedFeedback', reaction);
    }, [reaction]);

    return (
        <>
         <Description />
         <Options estim={updateFeedback} total={total} />
         {total > 0 ? (
            <Feedback reaction={reaction} total={total} positive={positive} />
         ) : (
            <Notification />
         )}
        </>
    );
 };

 export default App;
