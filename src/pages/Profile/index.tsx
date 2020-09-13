import { mainModule } from 'process';
import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData'

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

      <RightSide></RightSide>
    </Main>
  </Container>
}

export default Profile;