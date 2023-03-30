import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faUser, faClock, faFile } from '@fortawesome/free-solid-svg-icons';

const EventCard = ({ time, title, attendees, activities, attachments }) => {
  const renderAttachments = () => {
    return attachments.map((attachment, index) => (
      <div key={index} className="px-1">
        {/* <FontAwesomeIcon icon={faFile} className="text-black" /> */}
      </div>
    ));
  };

  const renderActivities = () => {
    return activities.map((activity, index) => (
      <div key={index} className="mb-4">
        <div className="text-black font-bold">
          {index + 1}. {activity.title}
        </div>
        <div className="bg-white rounded-full px-2 py-1 mt-2 flex items-center space-x-1 border border-black">
          {/* <FontAwesomeIcon icon={faClock} className="text-black" /> */}
          <span>{activity.duration} min</span>
          <div className="border-l border-black mx-1"></div>
          {/* <FontAwesomeIcon icon={faUser} className="text-black" /> */}
          <span>{activity.maxParticipants}</span>
        </div>
        <div className="text-black text-sm mt-2">{activity.description}</div>
      </div>
    ));
  };

  return (
    <div className="bg-gray-200 shadow-md rounded-lg p-4 w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="text-black font-bold">{time}</div>
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <div className="text-black">
          {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
        </div>
      </div>
      <hr className="border-black border-opacity-25 mb-2" />
      <div className="flex items-center justify-between mb-2">
        <div className="text-black">{attendees} participants</div>
        <div className="flex items-center space-x-1">{renderAttachments()}</div>
      </div>
      <hr className="border-black border-opacity-25 mb-2" />
      <div className="space-y-4">{renderActivities()}</div>
    </div>
  );
};

export default EventCard;
