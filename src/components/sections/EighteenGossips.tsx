import invitationConfig from '../../config'
import EighteenSection from './EighteenSection'
import { useT } from '../../LanguageContext'

export default function EighteenGossips() {
  const t = useT()
  return (
    <EighteenSection
      label={t.gossips.label}
      heading={t.gossips.heading}
      note={t.gossips.note}
      names={invitationConfig.gossipsAndShots.names}
      tone="alt"
      backdrop={{ src: '/images/photo-fur-01-cut.png', side: 'left' }}
    />
  )
}
