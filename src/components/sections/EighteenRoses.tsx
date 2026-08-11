import invitationConfig from '../../config'
import EighteenSection from './EighteenSection'
import { useT } from '../../LanguageContext'

export default function EighteenRoses() {
  const t = useT()
  return (
    <EighteenSection
      label={t.roses.label}
      heading={t.roses.heading}
      note={t.roses.note}
      names={invitationConfig.roses}
    />
  )
}
