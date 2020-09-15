import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Breadcrump, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles'

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrump>
        <RepoIcon />

        <Link className={'username'} to={'/VanessaSwerts'}>
          VanessaSwerts
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/VanessaSwerts/github-clone'}>
          github-clone
        </Link>
      </Breadcrump>

      <p>GitHub UI clone for study purposes.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/VanessaSwerts'}>
        <GithubIcon />
        <span> View on Github</span>
      </LinkButton>

    </Container>
  )
}

export default Repo;