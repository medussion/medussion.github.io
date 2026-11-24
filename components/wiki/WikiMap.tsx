import Link from 'next/link'
import { wikiDomainHref, wikiDomains } from '@/lib/wiki'
import BrainSymbol from './BrainSymbol'
import styles from './WikiMap.module.css'

const connections = [
  { id: 'programming', path: 'M240 57.5H275L338 109H397', node: [397, 109] },
  { id: 'ui-ux', path: 'M240 172.5H294L328 169H371', node: [371, 169] },
  { id: 'art', path: 'M240 287.5H294L329 248H373', node: [373, 248] },
  { id: 'qa', path: 'M240 402.5H275L342 312H433', node: [433, 312] },
  { id: 'planning', path: 'M760 57.5H725L662 109H603', node: [603, 109] },
  { id: 'publishing', path: 'M760 172.5H706L672 169H629', node: [629, 169] },
  { id: 'marketing', path: 'M760 287.5H706L671 248H627', node: [627, 248] },
  { id: 'player-support', path: 'M760 402.5H725L658 312H567', node: [567, 312] },
]

export default function WikiMap() {
  return (
    <div className={styles.map}>
      <svg className={styles.diagram} viewBox="0 0 1000 460" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <g transform="translate(310 59) scale(.95)">
          <BrainSymbol />
        </g>
        {connections.map(({ id, path, node }) => (
          <g key={id} data-connection={id} className={styles.connection}>
            <path d={path} />
            <circle cx={node[0]} cy={node[1]} r="4" />
          </g>
        ))}
      </svg>
      <svg className={styles.mobileBrain} viewBox="0 0 400 370" aria-hidden="true" focusable="false">
        <BrainSymbol />
      </svg>
      <ul className={styles.domains} aria-label="위키 분야">
        {wikiDomains.map((domain) => (
          <li key={domain.id}>
            <Link className={styles.card} href={wikiDomainHref(domain.id)} data-domain={domain.id}>
              <span className={styles.cardTitle}>{domain.name}</span>
              <span className={styles.cardSummary}>{domain.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
