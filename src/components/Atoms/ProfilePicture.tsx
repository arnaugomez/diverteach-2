import React from 'react';

import './ProfilePicture.css';

interface Props {
  src: string;
  alt?: string;
}

const ProfilePicture: React.FC<Props> = ({src, alt}) => {
  return <img src={src} alt={alt} className="profile-picture" />;
};

export default ProfilePicture;
