import { mainModule } from 'process';
import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'

const Profile: React.FC = () => {
  return <Container>
    <Main>
      <LeftSide>
        <ProfileData
          username={'VanessaSwerts'}
          name={'Vanessa Swerts'}
          avatarURL={'https://avatars2.githubusercontent.com/u/57146734?v=4'}
          followers={887}
          following={7}
          company={'Aurem'}
          location={'São Paulo, Brazil'}
          email={'vanessaswerts@gec.inatel.br'}
          blog={undefined}
        />
      </LeftSide>

      <RightSide>
        <Repos>
          <h2>Random Repos</h2>

          <div>
            {[1, 2, 3, 4, 5, 6].map(n => {
              <RepoCard
                key={n}
                username={'VanessaSwerts'}
                reponame={'github-clone'}
                description={'Clone UI from GitHub'}
                language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                starts={8}
                forks={4}
              />
            })}
          </div>
        </Repos>
      </RightSide>
    </Main>
  </Container>
}

export default Profile;