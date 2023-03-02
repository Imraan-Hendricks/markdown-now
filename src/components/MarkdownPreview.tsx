import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { DownloadButton } from './DownloadButton';
import { useMarkdown } from '@/context/MarkdownContext';

export function MarkdownPreview() {
  const { markdownInput } = useMarkdown();

  return (
    <div className='relative px-4 py-4 h-[50vh] xl:h-screen overflow-y-scroll'>
      <ReactMarkdown
        className='prose lg:prose-xl animate-[fade-in_600ms_ease]'
        remarkPlugins={[remarkGfm]}>
        {markdownInput}
      </ReactMarkdown>
      <DownloadButton />
    </div>
  );
}
