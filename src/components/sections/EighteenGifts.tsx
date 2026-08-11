import invitationConfig from '../../config'
import EighteenSection from './EighteenSection'
import { useT } from '../../LanguageContext'

export default function EighteenGifts() {
  const t = useT()
  return (
    <EighteenSection
      label={t.gifts.label}
      heading={t.gifts.heading}
      note={t.gifts.note}
      names={invitationConfig.eighteenGifts}
    />
  )
}
