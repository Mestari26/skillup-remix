import SyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = SyntaxHighlighterProps;

export default function Code(props: Props): JSX.Element {
  const { customStyle, children, ...restProps } = props;
  return (
    <SyntaxHighlighter
      style={atomOneDarkReasonable}
      customStyle={{
        borderRadius: '15px',
        padding: '12px 18px',
        border: '1px solid rgba(27, 162, 201, 0.5)',
        backgroundColor: '#171717',
        fontSize: '18px',
        fontWeight: '200',
        ...customStyle,
      }}
      language="javascript"
      {...restProps}>
      {children}
    </SyntaxHighlighter>
  );
}
