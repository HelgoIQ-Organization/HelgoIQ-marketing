import { Navigate, useParams } from 'react-router-dom'
import VerticalLanding from '../components/VerticalLanding'
import { verticalBySlug } from '../data/verticals'

export default function ForVertical() {
  const { slug } = useParams<{ slug: string }>()
  const vertical = verticalBySlug(slug)
  if (!vertical) return <Navigate to="/for/pilates" replace />
  return <VerticalLanding vertical={vertical} />
}
