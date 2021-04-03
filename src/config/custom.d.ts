/**
 * Used to allow svg imports in typescript.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}
