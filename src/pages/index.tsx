import { MarkdownProvider } from '@/context/MarkdownContext';
import { MarkdownInput } from '@/components/MarkdownInput';
import { MarkdownPreview } from '@/components/MarkdownPreview';

export default function Home() {
  return (
    <main>
      <section className='grid xl:grid-cols-2'>
        <MarkdownProvider>
          <MarkdownInput />
          <MarkdownPreview />
        </MarkdownProvider>
      </section>
    </main>
  );
}
