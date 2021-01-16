import { SystemUITheme } from "@fun-projects/ui";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends SystemUITheme {}
}
