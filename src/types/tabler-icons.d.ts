// Type declarations for individual @tabler/icons-react icon imports
// This enables tree-shaking by allowing direct imports from individual icon files
declare module '@tabler/icons-react/dist/esm/icons/*' {
  import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    stroke?: string | number;
    color?: string;
  }
  const Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  export default Icon;
}
