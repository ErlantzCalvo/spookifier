declare global {
    namespace JSX {
        interface IntrinsicElements {
            'two-up': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
  }

export default global