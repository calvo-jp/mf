/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module '@remotes/*' {
  export const Component: React.FC<any>;
  export default Component;
}
