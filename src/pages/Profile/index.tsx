import React from 'react'
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles'

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'


const Profile: React.FC = () => {

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">15</span>
    </div>
  )

  return <Container>
    <Tab className="desktop">
      <div className="wrapper">
        <span className="offset" />
        <TabContent />
      </div>
      <span className="line" />
    </Tab>

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
        <Tab className="mobile">
          <TabContent />
          <span className="line" />
        </Tab>
        <Repos>
          <h2>Random Repos</h2>

          <div>
            {[1, 2, 3, 4, 5, 6].map(n => (
              <RepoCard
                key={n}
                username={'VanessaSwerts'}
                reponame={'github-clone'}
                description={'Clone UI from GitHub'}
                language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                stars={8}
                forks={4}
              />
            ))}
          </div>
        </Repos>

        <CalendarHeading>
          Random calendar (do not represent actual data)
        </CalendarHeading>

        <RandomCalendar />
      </RightSide>
    </Main>
  </Container>
}

export default Profile;