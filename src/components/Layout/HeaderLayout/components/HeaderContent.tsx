import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints } from '@/types'
import { MobileHeaderContent } from './MobileHeaderContent'
import { TabletHeaderContent } from './TabletHeaderContent'

const HeaderContent: React.FC = () => {
  const screenWidth = useBreakpoint()
  const isMobile = screenWidth < breakpoints.tablet
  return isMobile ? <MobileHeaderContent /> : <TabletHeaderContent />
}

export default HeaderContent
