declare module 'react-vis-network' {
  import { Component } from 'react';

  interface NetworkData {
    nodes: Array<{
      id: number | string;
      label: string;
      color?: string;
      [key: string]: any;
    }>;
    edges: Array<{
      from: number | string;
      to: number | string;
      color?: string;
      [key: string]: any;
    }>;
  }

  interface NetworkOptions {
    layout?: {
      hierarchical?: boolean;
      [key: string]: any;
    };
    edges?: {
      color?: string;
      width?: number;
      [key: string]: any;
    };
    nodes?: {
      shape?: string;
      font?: {
        size?: number;
        color?: string;
      };
      borderWidth?: number;
      shadow?: boolean;
      [key: string]: any;
    };
    physics?: {
      enabled?: boolean;
      stabilization?: {
        iterations?: number;
      };
      [key: string]: any;
    };
    interaction?: {
      hover?: boolean;
      tooltipDelay?: number;
      [key: string]: any;
    };
    [key: string]: any;
  }

  interface NetworkProps {
    data: NetworkData;
    options?: NetworkOptions;
    style?: React.CSSProperties;
    getNetwork?: (network: any) => void;
    getNodes?: (nodes: any) => void;
    getEdges?: (edges: any) => void;
    getPositions?: (positions: any) => void;
    events?: {
      [eventName: string]: (params?: any) => void;
    };
  }

  export class Network extends Component<NetworkProps> {}
}
