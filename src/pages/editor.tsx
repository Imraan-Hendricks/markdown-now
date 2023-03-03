import { CustomHead } from '@/elements/CustomHead';
import { MarkdownInput } from '@/components/MarkdownInput';
import { MarkdownPreview } from '@/components/MarkdownPreview';
import { MarkdownProvider } from '@/context/MarkdownContext';

export default function Editor() {
  return (
    <main>
      <CustomHead title='Editor' />
      <section className='grid xl:grid-cols-2'>
        <MarkdownProvider>
          <MarkdownInput />
          <MarkdownPreview />
        </MarkdownProvider>
      </section>
    </main>
  );
}
