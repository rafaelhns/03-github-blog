import { Icon } from '../../../../components/Icon'
import {
  ProfileContainer,
  ProfileInfo,
  ProfileData,
  ProfilePicute,
  GithubProfile,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicute
        alt="Profile Picture"
        src="https://avatars.githubusercontent.com/u/55418068?v=4"
      />

      <ProfileInfo>
        <GithubProfile href="#">
          GITHUB
          <Icon variant="link" size={12} />
        </GithubProfile>

        <strong className="name">Cameron Williamson</strong>
        <p className="description">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="data">
          <ProfileData>
            <Icon size={18} variant="github" /> RafaelXau
          </ProfileData>
          <ProfileData>
            <Icon size={18} variant="building" /> Rocketseat
          </ProfileData>
          <ProfileData>
            <Icon size={18} variant="user-group" /> 1 seguidor
          </ProfileData>
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}
