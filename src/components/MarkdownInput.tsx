import { ChangeEvent } from 'react';
import { useMarkdown } from '@/context/MarkdownContext';

export function MarkdownInput() {
  const { markdownInput, setMarkdownInput } = useMarkdown();

  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    return setMarkdownInput(e.target.value);
  }

  return (
    <div className='bg-slate-900 border px-4 py-4 h-[50vh] xl:h-screen overflow-y-scroll'>
      <textarea
        className='bg-inherit text-gray-400 w-full border-none focus:outline-none animate-[fade-in_600ms_ease] placeholder:opacity-60'
        onChange={handleOnChange}
        placeholder='Enter markdown content'
        rows={500}
        spellCheck={false}
        value={markdownInput}
      />
    </div>
  );
}
