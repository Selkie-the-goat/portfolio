import MarkdownToJsx from 'markdown-to-jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ children, className }) => {
  const language = className?.replace('lang-', '') || 'javascript';
  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {children}
    </SyntaxHighlighter>
  );
};

const overrides = {
  code: CodeBlock,
};

export default function MarkdownRenderer({ content }) {
  return <MarkdownToJsx options={{ overrides }}>{content}</MarkdownToJsx>;
}
