import React from 'react';

// import { Container } from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  starts: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username, reponame, description, language, starts, forks, }) => {
  return <div />;
}

export default RepoCard;