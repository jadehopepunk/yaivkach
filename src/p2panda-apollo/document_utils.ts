import { Doc } from "./types"

export function documentKey(document: Doc<any>): string | undefined {
  const { viewId } = document.meta

  if (Array.isArray(viewId)) return viewId[0]
  else return viewId
}
