import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { Button } from '../elements/Button';
import { useMarkdown } from '@/context/MarkdownContext';

export function DownloadButton() {
  const { markdownInput } = useMarkdown();

  function downloadMarkdownFile() {
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/markdown;charset=utf-8,' + encodeURIComponent(markdownInput)
    );
    element.setAttribute('download', 'markdown-now.md');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  return (
    <Button
      className='group absolute bottom-5 right-5'
      onClick={downloadMarkdownFile}>
      <ArrowDownTrayIcon className='w-6 h-6' />
      <span className='ml-2 hidden group-hover:inline-block'>Download</span>
    </Button>
  );
}
