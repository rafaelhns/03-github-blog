import buildingIcon from '../../assets/icons/building.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import chevronLeftIcon from '../../assets/icons/chevron-left.svg'
import commentIcon from '../../assets/icons/comment.svg'
import githubIcon from '../../assets/icons/github.svg'
import linkIcon from '../../assets/icons/link.svg'
import userGroupIcon from '../../assets/icons/user-group.svg'

interface IconProps {
  size?: number
  variant:
    | 'building'
    | 'calendar'
    | 'chevron-left'
    | 'comment'
    | 'github'
    | 'link'
    | 'user-group'
}

export function Icon({ variant, size }: IconProps) {
  const icons = {
    building: buildingIcon,
    calendar: calendarIcon,
    'chevron-left': chevronLeftIcon,
    comment: commentIcon,
    github: githubIcon,
    link: linkIcon,
    'user-group': userGroupIcon,
  }

  return <img width={size} height={size} src={icons[variant]} alt="" />
}
