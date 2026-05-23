import type { ComponentType } from 'react'

declare module '*.mdx' {
  const MDXContent: ComponentType
  export default MDXContent
}
