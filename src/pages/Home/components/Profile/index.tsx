import { useContext } from 'react'
import { Icon } from '../../../../components/Icon'
import { BlogContext } from '../../../../contexts/BlogContext'
import {
  ProfileContainer,
  ProfileInfo,
  ProfileData,
  ProfilePicute,
  GithubProfile,
} from './styles'

export function Profile() {
  const { author } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <ProfilePicute alt="Profile Picture" src={author.avatar} />

      <ProfileInfo>
        <GithubProfile href={author.profileUrl} target="_blank">
          GITHUB
          <Icon variant="link" size={12} />
        </GithubProfile>

        <strong className="name">{author.name}</strong>
        <p className="description">{author.bio}</p>
        <div className="data">
          <ProfileData>
            <Icon size={18} variant="github" /> {author.login}
          </ProfileData>
          <ProfileData>
            <Icon size={18} variant="building" />{' '}
            {author.company ? author.company : 'sem empresa'}
          </ProfileData>
          <ProfileData>
            <Icon size={18} variant="user-group" />
            {`${author.followers} seguidore${author.followers > 1 && 's'}`}
          </ProfileData>
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}
