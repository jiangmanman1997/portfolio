/** 小羊插画 SVG 本体：行走动画与角落图标共用这一份图形。 */
function SheepArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 90" className={className}>
      {/* 羊毛身体：几个叠加的白色圆，做出绒球感 */}
      <circle cx="48" cy="52" r="20" fill="#fdfaf3" />
      <circle cx="74" cy="46" r="24" fill="#fff" />
      <circle cx="99" cy="54" r="18" fill="#fdfaf3" />
      {/* 头 */}
      <circle cx="112" cy="36" r="13" fill="#fff" />
      {/* 耳朵 */}
      <ellipse cx="105" cy="27" rx="7" ry="4" fill="#e6c79a" transform="rotate(-22 105 27)" />
      <ellipse cx="121" cy="27" rx="7" ry="4" fill="#e6c79a" transform="rotate(22 121 27)" />
      {/* 眼睛 */}
      <circle cx="116" cy="34" r="2.2" fill="#3b2f2f" />
      {/* 腿（leg-a/leg-b 对角摆动由 .sheep 容器内的 CSS 驱动；图标场景静止） */}
      <rect x="44" y="68" width="6" height="16" rx="3" fill="#a8a29e" className="leg-a" style={{ transformOrigin: '47px 68px' }} />
      <rect x="62" y="70" width="6" height="14" rx="3" fill="#a8a29e" className="leg-b" style={{ transformOrigin: '65px 70px' }} />
      <rect x="86" y="70" width="6" height="14" rx="3" fill="#a8a29e" className="leg-b" style={{ transformOrigin: '89px 70px' }} />
      <rect x="100" y="68" width="6" height="16" rx="3" fill="#a8a29e" className="leg-a" style={{ transformOrigin: '103px 68px' }} />
    </svg>
  )
}

/** 行走的小羊（Home 用，CSS 动画驱动）。 */
function Sheep() {
  return (
    <div className="sheep" aria-hidden="true">
      <SheepArt />
    </div>
  )
}

/** 小尺寸静态小羊图标（卡片角落等）。 */
function SheepIcon({ className }: { className?: string }) {
  return (
    <span aria-hidden="true">
      <SheepArt className={className} />
    </span>
  )
}

export default Sheep
export { SheepIcon }
