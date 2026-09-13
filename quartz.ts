import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Ordre personnalisé du menu de gauche (Explorer)
const EXPLORER_ORDER = [
  "Histoire",
  "Telluria",
  "Armes",
  "Armures",
  "Sorts Occultistes",
  "Bestiaire",
  "Marché",
  "Métiers",
]

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    const ai = EXPLORER_ORDER.indexOf(a.displayName)
    const bi = EXPLORER_ORDER.indexOf(b.displayName)
    if (ai !== -1 && bi !== -1) return ai - bi
    if (ai !== -1) return -1
    if (bi !== -1) return 1
    // repli : dossiers d'abord, puis ordre alphabétique (comportement par défaut)
    if ((a.file === undefined) !== (b.file === undefined)) {
      return a.file === undefined ? -1 : 1
    }
    return a.displayName.localeCompare(b.displayName)
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
