import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ContextProps {
  markdownInput: string;
  setMarkdownInput: Dispatch<SetStateAction<string>>;
}

const MarkdownContext = createContext<ContextProps | undefined>(undefined);

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);
  if (!context)
    throw new Error('useMarkdown must be inside a Provider with a value');

  return context;
};

const initialState = `# Welcome to Markdown Now!

Markdown Now offers an intuitive editing experience that will make your work more efficient. 

#### Get started by writing some markdown on the left. 
* Create and edit markdown files with ease
* Changes are rendered as you type
* Full markdown support 

Once you're happy with your markdown file, you can easily download it to use elsewhere by hovering or clicking on the preview.

Happy editing with Markdown Now! 
`;

export function MarkdownProvider({ children }: PropsWithChildren) {
  const [markdownInput, setMarkdownInput] = useState(initialState);

  return (
    <MarkdownContext.Provider value={{ markdownInput, setMarkdownInput }}>
      {children}
    </MarkdownContext.Provider>
  );
}
