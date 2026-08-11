import invitationConfig from '../../config'
import EighteenSection from './EighteenSection'
import { useT } from '../../LanguageContext'

export default function EighteenBlueBills() {
  const t = useT()
  return (
    <EighteenSection
      label={t.blueBills.label}
      heading={t.blueBills.heading}
      note={t.blueBills.note}
      names={invitationConfig.eighteenBlueBills}
      tone="alt"
    />
  )
}
